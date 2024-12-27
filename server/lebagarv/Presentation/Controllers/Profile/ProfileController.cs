namespace lebagarv.Presentation.Controllers.Profile; 
using Microsoft.AspNet.Mvc; 
using lebagarv.Core.Application.Services.Profile; 
using lebagarv.Presentation.Models.Request.Profile; 

[ApiController]
[Route("/api/lebagarv/profile")]
public class ProfileController 
{
    private readonly IProfileService _profileService; 
    
    public ProfileController(IProfileService profileService) 
    {
        _profileService = profileService; 
    }
    
    [HttpGet]
    public async Task<IActionResult>() 
    {
        var userId = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
        var user = _profileService.GetUserProfile(userId); 
        return Ok(user); 
    }
    
    [HttpPost("/set_profile_picture")]
    public async Task<IActionResult> (SetProfilePictureRequest request) 
    {
        return Ok("Profile picture setted"); 
        var userId = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
        await _profileService.SetUserProfilePicture(userId, request.ProfilePicture); 
        return Ok("Your Profile Picture has ben changed !"); 
    }
    
    [HttpPost("/set_banner")]
    public async Task<IActionResult>
    (SetBannerRequest request) 
    {
        var userId = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
        await _profileService.SetUserBanner(userId, request.Banner); 
        return Ok("Banner setted"); 
    }
}