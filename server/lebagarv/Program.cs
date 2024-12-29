using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Net.Mail; 
using System.Net;
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

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ICarsService, CarsService>();
builder.Services.AddScoped<IChatService, ChatService>(); 
builder.Services.AddScoped<IProfileService, ProfileService>();
builder.Services.AddScoped<IPasswordService, PasswordService>(); 

builder.Services.AddTransient<IEmailSender, EmailSender>(provider =>
{
    var smtpConfig = builder.Configuration.GetSection("Smtp");
    var smtpClient = new SmtpClient(smtpConfig["Host"], int.Parse(smtpConfig["Port"]))
    {
        Credentials = new NetworkCredential(smtpConfig["UserName"], smtpConfig["Password"]),
        EnableSsl = bool.Parse(smtpConfig["EnableSsl"])
    };
    return new EmailSender(smtpClient);
});
builder.Services.AddSingleton<JwtService>(new JwtService("vM8n3j5V7r9bJ2hQ4w6xYtZ1aG3m9P0s")); // i understand the danger.
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ICarRepository, CarRepository>();
builder.Services.AddScoped<IChatRepository, ChatRepository>(); 
builder.Services.AddScoped<IResetPasswordTokenRepository, ResetPasswordTokenRepository>();


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "http://agarvvIssuer"; // Use HTTPS in production
        options.Audience = "agarvvAudience";
        options.RequireHttpsMetadata = false; // Disable HTTPS requirement for development
    });

builder.Logging.AddConsole();

Console.WriteLine(Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"));

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"),
        ServerVersion.AutoDetect(Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"))
    ));

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
app.UseAuthorization();

app.MapControllers();

app.Run();