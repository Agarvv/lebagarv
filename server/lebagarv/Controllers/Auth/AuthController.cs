using Microsoft.AspNetCore.Mvc;

namespace lebagarv.Controllers.Auth; 

[Route("api/lebagarv/auth")]
public class AuthController : ControllerBase 
{   
    // register user 
    [HttpPost("register")]
    public IActionResult Register() 
    {
        
    }
}