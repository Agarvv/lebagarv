namespace lebagarv.Presentation.Controllers.Auth
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Google;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using System.Security.Claims;

    [ApiController]
    [Route("/api/lebagarv/auth/google")]
    public class GoogleController : ControllerBase
    {
        [HttpGet]
        public IActionResult SignInWithGoogle()
        {
            var state = Guid.NewGuid().ToString();
            HttpContext.Session.SetString("OAuthState", state);

            var properties = new AuthenticationProperties
            {
                RedirectUri = "https://lebagarv.onrender.com/api/lebagarv/auth/google/callback?state=" + properties.Items["State"],
                Items =
                {
                    { "LoginProvider", GoogleDefaults.AuthenticationScheme },
                    { "State", state }
                }
            };

            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("callback")]
        public async Task<IActionResult> GoogleResponse()
        {
            var receivedState = HttpContext.Request.Query["state"];
            var storedState = HttpContext.Session.GetString("OAuthState");

            if (string.IsNullOrEmpty(receivedState) || receivedState != storedState)
            {
                return BadRequest(new { error = "Invalid state parameter" });
            }

            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            if (result?.Principal != null)
            {
                var email = result.Principal.FindFirstValue(ClaimTypes.Email);

                if (!string.IsNullOrEmpty(email))
                {
                    return Ok(new { email });
                }
            }

            return Unauthorized(new { error = "Authentication failed" });
        }
    }
}