using Microsoft.AspNetCore.Mvc;
using lebagarv.Core.Application.Services.Profile;
using lebagarv.Presentation.Models.Request.Profile;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace lebagarv.Presentation.Controllers.Profile;

[ApiController]
[Route("/api/lebagarv/profile")]
public class ProfileController : ControllerBase
{
    private readonly IProfileService _profileService;

    public ProfileController(IProfileService profileService)
    {
        _profileService = profileService;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProfile(string id)
    {
        if (string.IsNullOrWhiteSpace(id))
            return BadRequest("Invalid ID");

        int userId;

        if (id == "s")
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!int.TryParse(userIdClaim, out userId))
            return Unauthorized();
        }
        else if (!int.TryParse(id, out userId))
        {
            return BadRequest("Invalid ID format");
        }

        var user = await _profileService.GetUserProfile(userId);
        var userCars = await _profileService.GetCarsByUserIdAsync(userId); 
        return Ok(user.ToProfileDTO(userCars)); 
    }
    
    [HttpPost("set-profile-picture")]
    public async Task<IActionResult> SetProfilePicture(SetProfilePictureRequest request)
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value); 

        await _profileService.SetUserProfilePicture(userId, request.ProfilePicture);
        return Ok("Your profile picture has been updated!");
    }

    [HttpPost("set-banner")]
    public async Task<IActionResult> SetBanner(SetBannerRequest request)
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value); 

        await _profileService.SetUserBanner(userId, request.Banner);
        return Ok("Your banner has been updated!");
    }
}
