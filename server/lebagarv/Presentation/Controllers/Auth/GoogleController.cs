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
    public class AccountController : ControllerBase 
    {
        [HttpGet]
        public IActionResult SignInWithGoogle()
        {
            var properties = new AuthenticationProperties
            {
                 RedirectUri = "/api/lebagarv/auth/google/callback",
                 Items = { { "LoginProvider", GoogleDefaults.AuthenticationScheme } }
            };
            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("callback")]
         public async Task<IActionResult> GoogleResponse()
        {    
            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);

           if (result?.Principal != null)
           {
             var email = result.Principal.FindFirstValue(ClaimTypes.Email);

             await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, result.Principal);

             if (!string.IsNullOrEmpty(email))
             {
                return Ok(new { email });
             }
             
             
            }

            return Unauthorized();
         }
        
        
        
        
    }
}