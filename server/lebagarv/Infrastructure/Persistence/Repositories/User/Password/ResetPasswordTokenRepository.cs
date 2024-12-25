namespace lebagarv.Infrastructure.Repositories.User;

using lebagarv.Core.Domain.Entities; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using lebagarv.Infrastructure.Persistence.Repositories.User.Password;

public class ResetPasswordTokenRepository : Repository<ResetPasswordToken>, IResetPasswordTokenRepository
{
    private readonly AppDbContext _context; 
    public ResetPasswordTokenRepository(AppDbContext context) : base(context)
    {
      _context = context; 
    }

    public async Task<ResetPasswordToken> FindByTokenAndEmailAsync(string token, string email)
    {
        return await _context.ResetPasswordTokens.FirstOrDefaultAsync
        (t => t.ResetToken == token && t.Email == email); 
    }
}