namespace lebagarv.Application.Services.Auth.Passwords; 

using System.Security.Cryptography;
using System.Text;

using lebagarv.Presentation.Models.Requests.Auth; 
using lebagarv.Infrastructure.Mail; 
using lebagarv.Infrastructure.Persistence.Repositories.User.Password; 
using lebagarv.Infrastructure.Persistence.Repositories.User;
using lebagarv.Infrastructure.Persistence.Repositories;
using lebagarv.Core.Domain.Exceptions; 
using lebagarv.Core.Domain.Entities;
using Microsoft.AspNetCore.Identity;

public class PasswordService : IPasswordService 
{
    private readonly IEmailSender _mailSender; 
    private readonly IResetPasswordTokenRepository _tokenRepository; 
    private readonly IUserRepository _userRepository; 
    private readonly IPasswordHasher<User> _passwordHasher; 

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
        _passwordHasher = new PasswordHasher<User>(); 
    }

    public async Task<bool> SendResetPasswordEmailAsync(string email) 
    {
       if(!await _userRepository.ExistsByEmailAsync(email))
       {
          return true; // dont want to send info to the atacant, so return true as the email has ben seet IF EMAIL EXISTS
       }
       
       ResetPasswordToken token = new()
       {
          Email=email,
          ResetToken=GenerateResetToken(),
          ExpiryDate=GenerateExpiryDate()
       }; 

       await _tokenRepository.AddAsync(token);        

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

       var user = _userRepository.FindByEmailAsync(request.Email); 
       if(!user) 
       {
         throw new LebagarvException("User Not Found"); 
       }

       var passwordHashed = _passwordHasher.HashPassword(user, newPassword); 
       
       user.Password = passwordHashed; 

       await _userRepository.SaveAsync(user); 

       return true; 
    } 

    private string GenerateResetToken()
    {
        using (var rng = RandomNumberGenerator.Create())
        {
            var tokenData = new byte[32]; 
            rng.GetBytes(tokenData);
            return Convert.ToBase64String(tokenData);
        }
    }

    private DateTime GenerateExpiryDate()
    {
        return DateTime.Now.AddHours(1); 
    }
}