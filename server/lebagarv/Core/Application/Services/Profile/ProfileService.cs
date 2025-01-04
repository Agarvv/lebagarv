namespace lebagarv.Core.Application.Services.Profile;

using lebagarv.Infrastructure.Persistence.Repositories.User; 
using lebagarv.Core.Domain.Dto.Profile;
using lebagarv.Infrastructure.Persistence.Repositories;
using lebagarv.Infrastructure.Repositories.User;
using lebagarv.Infrastructure.Persistence.Repositories.Cars; 
using lebagarv.Core.Domain.Entities.Cars; 

public class ProfileService : IProfileService 
{
    private readonly IUserRepository _userRepository; 
    private readonly ICarRepository _carRepository; 
    
    public ProfileService(IUserRepository userRepository, ICarRepository carRepository) 
    {
        _userRepository = userRepository; 
        _carRepository = carRepository; 
    }
    
    public async Task<ProfileDTO> GetUserProfile(int userId)
    {
        var user = await _userRepository.GetByIdAsync(userId); 
        var userCars = await GetUserCarsAsync(userId); 
        return user.ToProfileDTO(userCars);
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
    
    public async Task<List<Car>>
    GetUserCarsAsync(int userId)
    {
        return await _carRepository.GetCarsByUserIdAsync(userId); 
    }
}