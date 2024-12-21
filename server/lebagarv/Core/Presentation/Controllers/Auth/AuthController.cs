
namespace lebagarv.Core.Presentation.Controllers.Auth;

using Microsoft.AspNetCore.Mvc;
using lebagarv.Core.Presentation.Models.Requests.Auth;

[ApiController]
[Route("api/lebagarv/auth")]
public class AuthController : ControllerBase
{
    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterRequest request)
    {
        return Ok(request.Username);
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        return Ok(request.Email);
    }
}
