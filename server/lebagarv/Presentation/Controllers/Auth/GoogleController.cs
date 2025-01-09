namespace lebagarv.Presentation.Controllers.Auth
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Google;
    using Microsoft.AspNetCore.Mvc;
    using System.Security.Claims;

    [ApiController]
    [Route("/api/lebagarv/auth/google")]
    public class GoogleController : ControllerBase
    {

        [HttpGet]
        public IActionResult Login()
        {
            var redirectUrl = Url.Action("Callback", "Google");
            var properties = new AuthenticationProperties { RedirectUri = redirectUrl };
            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("callback")]
        public IActionResult Callback()
        {
            
            var result = HttpContext.AuthenticateAsync().Result;

            if (result?.Principal != null)
            {
                var email = result.Principal.FindFirst(ClaimTypes.Email)?.Value;
                return Ok(new { message = "Authentication Success!", email });
            }

            return BadRequest("Error while authenticating");
        }
    }
}
