using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Net.Mail;
using System.Net;
using lebagarv.Presentation.Hubs;
using lebagarv.Core.Application.Services.Auth;
using lebagarv.Infrastructure.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using lebagarv.Infrastructure.Persistence.Repositories;
using lebagarv.Infrastructure.Repositories.User;
using Lebagarv.Presentation.Middleware;
using lebagarv.Application.Services.Cars;
using lebagarv.Infrastructure.Mail;
using lebagarv.Core.Application.Services.Chat;
using lebagarv.Infrastructure.Persistence.Repositories.Chat;
using lebagarv.Infrastructure.Persistence.Repositories.Cars;
using lebagarv.Infrastructure.Repositories.Cars;
using lebagarv.Presentation.Middleware;
using lebagarv.Core.Application.Services.Profile;
using lebagarv.Application.Services.Auth.Passwords;
using lebagarv.Infrastructure.Persistence.Repositories.User.Password;
using lebagarv.Core.Application.Services.Favorites;
using lebagarv.Infrastructure.Persistence.Repositories.Favorites;
using lebagarv.Infrastructure.Persistence.Repositories.Chat.Messages;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.HttpOverrides;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", builder =>
        builder.WithOrigins("https://lebagarv.vercel.app")
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials());
});


builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
})
.AddCookie(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.SameSite = SameSiteMode.Lax;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    options.Cookie.MaxAge = TimeSpan.FromDays(7);
    options.Cookie.IsEssential = true;
})
.AddGoogle(options =>
{
    options.ClientId = Environment.GetEnvironmentVariable("GOOGLE_CLIENT_ID");  
    options.ClientSecret = Environment.GetEnvironmentVariable("GOOGLE_CLIENT_SECRET");
    //options.CallbackPath = "/api/lebagarv/auth/google/callback";  
    options.SaveTokens = true;

    options.Events.OnCreatingTicket = async context =>
    {
        var tokens = context.Properties.GetTokens()?.ToList() ?? new List<AuthenticationToken>();
        tokens.Add(new AuthenticationToken
        {
            Name = "access_token",
            Value = context.AccessToken
        });

        context.Properties.StoreTokens(tokens);
        await Task.CompletedTask;
    };
}).AddGitHub(options => {
  options.ClientId=Environment.GetEnvironmentVariable("GITHUB_CLIENT_ID");
  options.ClientSecret=Environment.GetEnvironmentVariable("GITHUB_CLIENT_SECRET");  
 options.CallbackPath="/api/lebagarv/auth/github/callback"; 
});




builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ICarsService, CarsService>();
builder.Services.AddScoped<IChatService, ChatService>();
builder.Services.AddScoped<IProfileService, ProfileService>();
builder.Services.AddScoped<IPasswordService, PasswordService>();
builder.Services.AddScoped<IFavoriteService, FavoriteService>();

builder.Services.AddTransient<IEmailSender, EmailSender>(provider =>
{
    var smtpConfig = builder.Configuration.GetSection("Smtp");
    var smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD");

    var smtpClient = new SmtpClient(smtpConfig["Host"], int.Parse(smtpConfig["Port"]))
    {
        Credentials = new NetworkCredential(smtpConfig["UserName"], smtpPassword),
        EnableSsl = bool.Parse(smtpConfig["EnableSsl"])
    };

    return new EmailSender(smtpClient);
});

builder.Services.AddSingleton<JwtService>(new JwtService("vM8n3j5V7r9bJ2hQ4w6xYtZ1aG3m9P0s"));
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ICarRepository, CarRepository>();
builder.Services.AddScoped<IChatRepository, ChatRepository>();
builder.Services.AddScoped<IFavoritesRepository, FavoritesRepository>();
builder.Services.AddScoped<IResetPasswordTokenRepository, ResetPasswordTokenRepository>();
builder.Services.AddScoped<IMessageRepository, MessageRepository>();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"),
        ServerVersion.AutoDetect(Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"))
    ));

builder.Logging.AddConsole();
builder.Logging.SetMinimumLevel(LogLevel.Debug);


Console.WriteLine(Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"));

var app = builder.Build();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.UseSession();

app.UseMiddleware<AuthMiddleware>();
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Use(async (context, next) =>
{
    Console.WriteLine("Incoming Request: " + context.Request.Path + "?" + context.Request.QueryString);
    await next();
});

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("AllowSpecificOrigins");

app.MapControllers();
app.MapHub<ChatHub>("/chatHub");

app.Run();
