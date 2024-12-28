namespace lebagarv.Core.Application.Services.Profile;

using lebagarv.Infrastructure.Persistence.Repositories.User; 
using lebagarv.Core.Domain.Dto.Profile; 


public class ProfileService : IProfileService 
{
    private readonly IUserRepository _userRepository; 
    
    public ProfileService(IUserRepository _userRepository) 
    {
        _userRepository = userRepository; 
    }
    
    public async Task<ProfileDTO> GetUserProfile(int userId)
    {
        var user = await _userRepository.FindByIdAsync(userId); 
        return user.toProfileDTO();
    }
    
    public async Task<bool> SetUserProfilePicture(int userId, string profilePictureUrl)
    {
        var user = await _userRepository.FindByIdAsync(userId); 
        
        user.ProfilePicture = profilePictureUrl; 
        await _userRepository.SaveAsync(user); 
        
        return true; 
    }
    
    public async Task SetUserBanner(int userId, string bannerUrl)
    {
        var user = await _userRepository.FindByIdAsync(userId); 
        user.Banner = bannerUrl; 
        await _userRepository.SaveAsync(user); 
        return true;
    }
}