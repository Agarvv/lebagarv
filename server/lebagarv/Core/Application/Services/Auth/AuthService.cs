namespace lebagarv.Core.Application.Services.Auth; 

using lebagarv.Core.Presentation.Models.Requests.Auth; 

public class AuthService : IAuthService 
{
    public Task<bool> RegisterAsync(RegisterRequest request) 
    {
        return Task.FromResult(true);
    }

    public Task<string> LoginAsync(LoginRequest request)
    {
    return Task.FromResult("JWT TOKEN"); 
    }

}