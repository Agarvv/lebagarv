namespace lebagarv.Presentation.Models.Requests.Auth; 

using System.ComponentModel.DataAnnotations;
public class SendResetPasswordEmailRequest 
{  
    [Required, EmailAddress]
    public string Email { get; set; }
}