namespace lebagarv.Core.Domain.Entities
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.ComponentModel.DataAnnotations;
    using lebagarv.Core.Domain.Dto.Profile;

    public class User
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

        public ProfileDTO ToProfileDTO() 
        {
            return new ProfileDTO
            {
                Username = this.Username 
            };
        }
    }
}
