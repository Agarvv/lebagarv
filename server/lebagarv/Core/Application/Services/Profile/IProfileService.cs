
namespace lebagarv.Core.Application.Services.Profile;
using lebagarv.Core.Domain.Dto.Profile;
using lebagarv.Core.Domain.Entities.Cars; 

public interface IProfileService 
{
    public Task<ProfileDTO> GetUserProfile(int userId); 
    public Task<bool> SetUserProfilePicture(int userId, string profilePictureUrl);
    public Task<bool> SetUserBanner(int userId, string bannerUrl); 
    public Task<IEnumerable<Car>>
    GetUserCarsAsync(int userId); 
}