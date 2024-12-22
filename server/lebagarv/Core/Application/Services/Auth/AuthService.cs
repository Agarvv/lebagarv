namespace lebagarv.Core.Application.Services.Auth; 

using lebagarv.Core.Presentation.Models.Requests.Auth; 
using Microsoft.AspNetCore.Identity; 
using lebagarv.Core.Infrastructure.Persistence;
using lebagarv.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

public class AuthService : IAuthService 
{
    private readonly AppDbContext _context; 
    private readonly PasswordHasher<User> _passwordHasher;

    public AuthService(AppDbContext context) 
    {
        _context = context;
        _passwordHasher = new PasswordHasher<User>();
    }

    public async Task<bool> RegisterAsync(RegisterRequest request) 
    {
        var user = new User
        {
           Username=request.Username,
           Email=request.Email
        };

        user.Password = _passwordHasher.HashPassword(user, request.Password); 
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        
        return true;
    }

    public Task<string> LoginAsync(LoginRequest request)
    {
    return Task.FromResult("JWT TOKEN"); 
    }

    public async Task<bool> emailExists(string email)
    {
      return await _context.Users.AnyAsync(u => u.Email == email);
    } 
}