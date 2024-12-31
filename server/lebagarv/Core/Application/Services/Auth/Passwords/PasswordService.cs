namespace lebagarv.Application.Services.Auth.Passwords; 

using System.Security.Cryptography;
using System.Text;

using lebagarv.Presentation.Models.Requests.Auth; 
using lebagarv.Infrastructure.Mail; 
using lebagarv.Infrastructure.Persistence.Repositories.User.Password; 
using lebagarv.Infrastructure.Persistence.Repositories.User;
using lebagarv.Infrastructure.Persistence.Repositories;
using lebagarv.Core.Domain.Exceptions; 
using lebagarv.Core.Domain.Entities.Users;
using Microsoft.AspNetCore.Identity;
using lebagarv.Core.Domain.Entities;

public class PasswordService : IPasswordService 
{
    private readonly IEmailSender _mailSender; 
    private readonly IResetPasswordTokenRepository _tokenRepository; 
    private readonly IUserRepository _userRepository; 
    private readonly IPasswordHasher<AppUser> _passwordHasher; 

    public PasswordService
    (
        IEmailSender mailSender,
        IResetPasswordTokenRepository tokenRepository, 
        IUserRepository userRepository
    )
    {
        _mailSender = mailSender; 
        _tokenRepository = tokenRepository; 
        _userRepository = userRepository; 
        _passwordHasher = new PasswordHasher<AppUser>(); 
    }

    public async Task<bool> SendResetPasswordEmailAsync(string email) 
    {
       if(!await _userRepository.ExistsByEmailAsync(email))
       {
          return true; // for security purposes
       }
       
       ResetPasswordToken token = new()
       {
          Email=email,
          ResetToken=GenerateResetToken(),
          ExpiryDate=GenerateExpiryDate()
       }; 

       await _tokenRepository.AddAsync(token);        
       
       var url = $"https://lebagarv.vercel.app/reset_passord/{email}/{token.ResetToken}"; 
       var mailMessage = $"Hi, Use this URL to reset your password at Lebagarv: {url}"; 
       await _mailSender.SendEmailAsync(email, "YOUR PASSWORD AT LEBAGARV", mailMessage); 

       return true; 
    }

    public async Task<bool> ResetPasswordAsync(ResetPasswordRequest request)
    {
       var token = await _tokenRepository.FindByTokenAndEmailAsync(request.ResetToken, request.Email); 
       if(token == null)
       {
         throw new LebagarvException("Reset Password Token Not Found...", 400);
       }

       if(token.IsExpired())
       {
        throw new LebagarvException("Your Token is expired, get a new one.", 400); 
       }

       var user = await _userRepository.FindByEmailAsync(request.Email);
       if(user == null) 
       {
         throw new LebagarvException("User Not Found", 404);
       }

       var passwordHashed = _passwordHasher.HashPassword(user, request.Password);
       
       user.Password = passwordHashed; 

       await _userRepository.SaveAsync(user); 

       await _tokenRepository.DeleteAsync(token.Id);

       return true; 
    } 

    public string GenerateResetToken()
    {
        using (var rng = RandomNumberGenerator.Create())
        {
            var tokenData = new byte[32]; 
            rng.GetBytes(tokenData);
            return Convert.ToBase64String(tokenData);
        }
    }

    public DateTime GenerateExpiryDate()
    {
        return DateTime.Now.AddHours(1);
    }
} 
