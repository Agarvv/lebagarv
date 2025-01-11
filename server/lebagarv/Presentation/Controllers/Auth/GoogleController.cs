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
            HttpContext.Response.Cookies.Delete(".AspNetCore.Session");
            HttpContext.Response.Cookies.Delete(".AspNetCore.Cookies");

            var properties = new AuthenticationProperties
            {
                RedirectUri = "https://lebagarv.onrender.com/api/lebagarv/auth/google/callback",
                Items =
                {
                    { "LoginProvider", GoogleDefaults.AuthenticationScheme },
                    { "State", Guid.NewGuid().ToString() }
                }
            };

            Console.WriteLine("Generated State: " + properties.Items["State"]);
            Console.WriteLine("Session Cookie Before Redirect: " + HttpContext.Request.Headers["Cookie"]);

            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("callback")]
        public async Task<IActionResult> GoogleResponse()
        {
            var state = HttpContext.Request.Query["state"];
            Console.WriteLine("Received State: " + state);

            if (string.IsNullOrEmpty(state))
            {
                Console.WriteLine("Missing or invalid state.");
                return BadRequest(new { error = "Invalid state parameter" });
            }

            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            if (result?.Principal != null)
            {
                var email = result.Principal.FindFirstValue(ClaimTypes.Email);
                Console.WriteLine("Authenticated Email: " + email);

                if (!string.IsNullOrEmpty(email))
                {
                    return Ok(new { email });
                }
            }

            Console.WriteLine("Authentication failed or no principal found.");
            return Unauthorized(new { error = "Authentication failed" });
        }
    }
}