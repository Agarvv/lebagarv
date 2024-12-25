namespace lebagarv.Application.Services.Auth.Passwords; 

public interface IPasswordService 
{
    public Task<bool> SendResetPasswordEmailAsync(); 
    public Task<bool> ResetPasswordAsync(); 
}