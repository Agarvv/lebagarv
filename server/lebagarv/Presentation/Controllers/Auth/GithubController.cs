using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

[ApiController]
[Route("api/lebagarv/auth/github")]
public class GitHubAuthController : ControllerBase
{
    [HttpGet]
    public IActionResult SignInWithGitHub()
    {
        var properties = new AuthenticationProperties
        {
            RedirectUri = Url.Action(nameof(GitHubCallback), "GitHubAuth")
        };

        return Challenge(properties, "GitHub");
    }

    [HttpGet("callback")]
    public async Task<IActionResult> GitHubCallback()
    {
        var authenticateResult = await HttpContext.AuthenticateAsync("GitHub");

        if (!authenticateResult.Succeeded || authenticateResult.Principal == null)
        {
            return Unauthorized();
        }

        var username = authenticateResult.Principal.FindFirstValue(ClaimTypes.Name);
        var email = authenticateResult.Principal.FindFirstValue(ClaimTypes.Email);

        return Ok(new { username, email });
    }
}
