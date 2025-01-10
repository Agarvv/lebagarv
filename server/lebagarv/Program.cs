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
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;

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
.AddCookie(CookieAuthenticationDefaults.AuthenticationScheme)
.AddGoogle(options =>
{
    options.CallbackPath = new PathString("/api/lebagarv/auth/google/callback"); 
    options.ClientId = Environment.GetEnvironmentVariable("GOOGLE_CLIENT_ID");
    options.ClientSecret = Environment.GetEnvironmentVariable("GOOGLE_CLIENT_SECRET");

    /*options.Events.OnRedirectToAuthorizationEndpoint = context =>
    {
        if (!context.RedirectUri.StartsWith("https://"))
        {
            context.RedirectUri = context.RedirectUri.Replace("http://", "https://");
        }
        context.Response.Redirect(context.RedirectUri);
        return Task.CompletedTask;
    }; */
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

Console.WriteLine(Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"));


var app = builder.Build();


app.UseMiddleware<AuthMiddleware>(); 
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("AllowSpecificOrigins");

app.MapControllers();
app.MapHub<ChatHub>("/chatHub");

app.Run();
