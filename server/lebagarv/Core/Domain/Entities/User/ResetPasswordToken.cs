using System;
using System.ComponentModel.DataAnnotations;

namespace lebagarv.Core.Domain.Entities
{
    public class ResetPasswordToken
    {
        [Key]
        public int Id { get; set; } 

        [Required, EmailAddress]
        public string Email { get; set; } 

        [Required]
        public string ResetToken { get; set; } 

        [Required]
        public DateTime ExpiryDate { get; set; } 

        public bool IsExpired()
        {
            return DateTime.Now > this.ExpiryDate;
        }
    }
}
