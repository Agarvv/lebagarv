namespace lebagarv.Application.Services.Auth.Passwords; 

public interface IPasswordService 
{
    public Task<bool> SendResetPasswordEmailAsync(string email); 
    public Task<bool> ResetPasswordAsync(ResetPasswordRequest request); 
    string GenerateResetToken(); 
    DateTime GenerateExpiryDate(); 
}