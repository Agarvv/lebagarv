using lebagarv.Infrastructure.Persistence;
using MySql.Data.MySqlClient;
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using lebagarv.Core.Application.Services.Auth;
using lebagarv.Infrastructure.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using lebagarv.Infrastructure.Persistence.Repositories;
using lebagarv.Infrastructure.Repositories.User;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddSingleton<JwtService>(new JwtService("vM8n3j5V7r9bJ2hQ4w6xYtZ1aG3m9P0s")); // i understand the danger.
builder.Services.AddScoped<IUserRepository, UserRepository>();

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