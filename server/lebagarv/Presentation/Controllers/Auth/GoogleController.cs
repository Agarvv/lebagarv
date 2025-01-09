namespace lebagarv.Presentation.Controllers.Auth
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Google;
    using Microsoft.AspNetCore.Mvc; 


    [ApiController]
    [Route("/api/lebagarv/auth/google")]
    public class GoogleController : ControllerBase 
    {
        [HttpGet]
        public IActionResult Login()
        {
          return Challenge(new AuthenticationProperties 
          { RedirectUri = "/signin-google" }, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("callback")]
        public IActionResult Callback()
        {   
           var result = HttpContext.AuthenticateAsync().Result;
           if (result?.Principal != null)
           {
             var email = result.Principal.FindFirst("email")?.Value;
             return Ok(new { message = "Authentication Success!", email });
           }

           return BadRequest("Error while authenticating");
        }
    }
}