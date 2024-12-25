namespace lebagarv.Core.Domain.Entities; 

using System.ComponentModel.DataAnnotations;

public class ResetPasswordToken 
{
   [Key]
   public int Id; 

   [Required, EmailAddress]
   public string Email; 

   [Required]
   public string ResetToken; 

   [Required]
   public DateTime ExpiryDate; 

   public bool IsExpired()
   {
      return DateTime.Now > this.ExpiryDate; 
   }
}