namespace lebagarv.Core.Application.Services.Auth; 

using lebagarv.Presentation.Models.Requests.Auth; 
using lebagarv.Core.Domain.Entities.Users;

public interface IAuthService 
{
    Task<bool> RegisterAsync(RegisterRequest request);
    Task<string> LoginAsync(LoginRequest request, AppUser user); 
    
    Task<bool> SendResetPasswordEmailAsync(string email); 

    Task<bool> ResetPasswordAsync(ResetPasswordRequest request);

    Task<bool> CheckAuthAsync(string jwt); 

    bool PasswordMatch(AppUser user, string rawPassword);
}