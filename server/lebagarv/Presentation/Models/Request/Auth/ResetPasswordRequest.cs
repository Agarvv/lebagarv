namespace lebagarv.Presentation.Models.Requests.Auth; 

using System.ComponentModel.DataAnnotations;

public class ResetPasswordRequest 
{  
    [Required, EmailAddress]
    public string Email { get; set; }
    [Required]
    public string ResetToken { get; set; }

    public string Password { get; set; }
}