using lebagarv.Core.Infrastructure.Persistence;
using MySql.Data.MySqlClient;
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using lebagarv.Core.Application.Services.Auth;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<IAuthService, AuthService>();

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
