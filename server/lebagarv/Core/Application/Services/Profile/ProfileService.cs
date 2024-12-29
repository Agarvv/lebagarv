namespace lebagarv.Core.Application.Services.Profile;

using lebagarv.Infrastructure.Persistence.Repositories.User; 
using lebagarv.Core.Domain.Dto.Profile;
using lebagarv.Infrastructure.Persistence.Repositories;
using lebagarv.Infrastructure.Repositories.User;

public class ProfileService : IProfileService 
{
    private readonly IUserRepository _userRepository; 
    
    public ProfileService(IUserRepository userRepository) 
    {
        _userRepository = userRepository; 
    }
    
    public async Task<ProfileDTO> GetUserProfile(int userId)
    {
        var user = await _userRepository.GetByIdAsync(userId); 
        return user.ToProfileDTO();
    }
    
    public async Task<bool> SetUserProfilePicture(int userId, string profilePictureUrl)
    {
        var user = await _userRepository.FindByIdAsync(userId); 
        
        user.ProfilePicture = profilePictureUrl; 
        await _userRepository.SaveAsync(user); 
        
        return true; 
    }
    
    public async Task<bool> SetUserBanner(int userId, string bannerUrl)
    {
        var user = await _userRepository.FindByIdAsync(userId); 
        user.Banner = bannerUrl; 
        await _userRepository.SaveAsync(user); 
        return true;
    }
}