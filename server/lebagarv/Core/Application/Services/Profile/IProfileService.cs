namespace lebagarv.Core.Application.Services.Profile;

public interface IProfileService 
{
    public Task GetUserProfile(int userId); 
    public Task SetUserProfilePicture(int userId, string profilePictureUrl);
    public Task SetUserBanner(int userId, string bannerUrl); 
}