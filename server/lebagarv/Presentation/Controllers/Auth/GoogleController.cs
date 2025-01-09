
namespace lebagarv.Presentation.Controllers.Auth; 
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Google;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using System.Security.Claims;

    public class AccountController : Controller
    {
        [Route("signin-google")]
        public IActionResult SignInWithGoogle()
        {
            var redirectUrl = Url.Action("GoogleResponse", "Account");
            var properties = new AuthenticationProperties { RedirectUri = redirectUrl };
            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [Route("google-response")]
        public async Task<IActionResult> GoogleResponse()
        {
            var info = await HttpContext.AuthenticateAsync(GoogleDefaults.AuthenticationScheme);
            if (info?.Principal != null)
            {
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                return Ok(new { email });
            }

            return Unauthorized();
        }
    }
}