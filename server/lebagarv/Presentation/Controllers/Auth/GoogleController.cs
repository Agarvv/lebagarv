using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace lebagarv.Presentation.Controllers.Auth
{
    [ApiController]
    [Route("api/lebagarv/auth/google")]
    public class GoogleController : ControllerBase
    {
        [HttpGet]
        public IActionResult SignInWithGoogle()
        {
            Console.WriteLine("Auth google endpoint hit"); 
            var properties = new AuthenticationProperties
            {
                RedirectUri = "/",  
                Items = { { "LoginProvider", GoogleDefaults.AuthenticationScheme } }
            };

            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("callback")]
        public async Task<IActionResult> GoogleResponse()
        {
            Console.WriteLine("Callback endpoint hit"); 
            
            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            if (result?.Principal != null)
            {
                var email = result.Principal.FindFirstValue(ClaimTypes.Email);
                var name = result.Principal.FindFirstValue(ClaimTypes.Name);
                var accessToken = result.Properties.GetTokenValue("access_token");

                return Ok(new
                {
                    email,
                    name,
                    accessToken
                });
            }

            return Unauthorized();
        }
    }
}