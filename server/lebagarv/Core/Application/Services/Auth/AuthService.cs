namespace lebagarv.Core.Application.Services.Auth
{
    using lebagarv.Presentation.Models.Requests.Auth;
    using Microsoft.AspNetCore.Identity;
    using lebagarv.Infrastructure.Persistence;
    using lebagarv.Core.Domain.Entities.Users;
    using lebagarv.Infrastructure.Security;
    using lebagarv.Infrastructure.Persistence.Repositories;
    using lebagarv.Core.Domain.Exceptions; 

    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly PasswordHasher<AppUser> _passwordHasher;
        private readonly JwtService _jwtService;

        public AuthService(JwtService jwtService, IUserRepository userRepository)
        {
            _passwordHasher = new PasswordHasher<AppUser>();
            _jwtService = jwtService;
            _userRepository = userRepository;
        }

        public async Task<bool> RegisterAsync(RegisterRequest request)
        {
            var user = new AppUser
            {
                Username = request.Username,
                Email = request.Email
            };

            user.Password = _passwordHasher.HashPassword(user, request.Password);
            await _userRepository.AddAsync(user);

            return true;
        }

        public Task<string?> LoginAsync(LoginRequest request, AppUser user)
        {
            if (PasswordMatch(user, request.Password))
            {
                var token = _jwtService.GenerateJwtToken(user.Id, user.Username, user.Email);
                return Task.FromResult<string?>(token);
            }
            return Task.FromResult<string?>(null);
        }

        public async Task<bool> SendResetPasswordEmailAsync(string email)
        {
            return true;
        }

        public async Task<bool> ResetPasswordAsync(ResetPasswordRequest request)
        {
            return true;
        }

        public async Task<bool> CheckAuthAsync(string jwt)
        {
           var claims = _jwtService.ValidateToken(jwt); 
           if(claims == null)
           {
             throw new LebagarvException("UNAUTHENTICATED", 401); 
           }

           return true; 
        }

        public bool PasswordMatch(AppUser user, string rawPassword)
        {
            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, rawPassword);
            return result == PasswordVerificationResult.Success;
        }
    }
}