namespace lebagarv.Core.Application.Services.Auth; 

using lebagarv.Presentation.Models.Requests.Auth; 
using lebagarv.Core.Domain.Entities;

public interface IAuthService 
{
    Task<bool> RegisterAsync(RegisterRequest request);
    Task<string> LoginAsync(LoginRequest request, User user); 
    
    Task<bool> SendResetPasswordEmailAsync(string email); 

    Task<bool> ResetPasswordAsync(ResetPasswordRequest request);

    Task<bool> CheckAuthAsync(string jwt); 

    bool PasswordMatch(User user, string rawPassword);
}