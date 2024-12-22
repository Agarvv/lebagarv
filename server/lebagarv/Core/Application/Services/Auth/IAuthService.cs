namespace lebagarv.Core.Application.Services.Auth; 

using lebagarv.Core.Presentation.Models.Requests.Auth; 

public interface IAuthService 
{
    Task<bool> RegisterAsync(RegisterRequest request);
    Task<string> LoginAsync(LoginRequest request); 
    Task<bool> isEmailTakenAsync(string email);
}