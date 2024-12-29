namespace lebagarv.Application.Services.Auth.Passwords;

using lebagarv.Presentation.Models.Requests.Auth;


public interface IPasswordService 
{
    public Task<bool> SendResetPasswordEmailAsync(string email); 
    public Task<bool> ResetPasswordAsync(ResetPasswordRequest request); 
    string GenerateResetToken(); 
    DateTime GenerateExpiryDate(); 
}