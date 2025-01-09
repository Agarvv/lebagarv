namespace lebagarv.Core.Domain.Entities.Users
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.ComponentModel.DataAnnotations;
    using lebagarv.Core.Domain.Dto.Profile;
    using lebagarv.Core.Domain.Entities.Cars; 
    using lebagarv.Core.Domain.Dto.Chat;

    public class AppUser
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        public string? ProfilePicture { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string? Banner { get; set; }

        public ProfileDTO ToProfileDTO(List<Car> cars) 
         {
             return new ProfileDTO
             {
                 Id=this.Id,
                 ProfilePicture=this.ProfilePicture,
                 Banner=this.Banner ?? string.Empty,
                Username = this.Username,
                Cars = cars.Select(c => c.toShowcaseDto()).ToList()
             };
        }
        
        public UserToDisplayInfoDTO toChatUserToDisplayInfo() 
        {
            return new UserToDisplayInfoDTO()
            {
                Id=this.Id,
                Username=this.Username,
                ProfilePicture=this.ProfilePicture
            }; 
        }
        
        public UserMessageDTO toUserMessageDto() 
        {
            return new UserMessageDTO()
            {
                Id=this.Id,
                Username=this.Username,
                ProfilePicture=this.ProfilePicture
            }; 
        }
    }
}
