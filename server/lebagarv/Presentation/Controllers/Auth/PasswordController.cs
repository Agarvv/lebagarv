namespace lebagarv.Presentation.Controllers.Auth; 

using Microsoft.AspNetCore.Mvc; 
using lebagarv.Application.Services.Auth.Passwords; 
using lebagarv.Presentation.Models.Requests.Auth; 

[ApiController]
[Route("api/lebagarv/auth/passwords")]
public class PasswordController : ControllerBase 
{
  private readonly IPasswordService _passwordService; 
  public PasswordController(IPasswordService passwordService)
  {
    _passwordService = passwordService; 
  }

  [HttpPost("/send_reset_email")]
  public async Task<IActionResult> SendResetPasswordEmail(SendResetPasswordEmailRequest request)
  {
     await _passwordService.SendResetPasswordEmailAsync(request.Email); 
     return Ok("Go verify your email"); 
  }

  [HttpPost("/reset")]
  public async Task<IActionResult> ResetPassword(ResetPasswordRequest request)
  {
     await _passwordService.ResetPasswordAsync(request); 
     return Ok("You're All Set!"); 
  }
}