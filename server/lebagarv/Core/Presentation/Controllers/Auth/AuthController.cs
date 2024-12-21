
namespace lebagarv.Core.Presentation.Controllers.Auth;

using Microsoft.AspNetCore.Mvc;
using lebagarv.Core.Presentation.Models.Requests.Auth;
using lebagarv.Core.Application.Services.Auth;

[ApiController]
[Route("api/lebagarv/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService; 

    public AuthController(IAuthService authService)
    {
        _authService = authService; 
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        await _authService.RegisterAsync(request);
        return Ok("Registered Sucesfully!!!");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
       var token = await _authService.LoginAsync(request);
       return Ok(token);
    }
}
