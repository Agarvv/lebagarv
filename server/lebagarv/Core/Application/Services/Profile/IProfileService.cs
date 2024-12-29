using lebagarv.Core.Domain.Dto.Profile;

namespace lebagarv.Core.Application.Services.Profile;

public interface IProfileService 
{
    public Task<ProfileDTO> GetUserProfile(int userId); 
    public Task<bool> SetUserProfilePicture(int userId, string profilePictureUrl);
    public Task<bool> SetUserBanner(int userId, string bannerUrl); 
}