namespace lebagarv.Infrastructure.Persistence.Repositories.User.Password; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Core.Domain.Entities; 
public interface IResetPasswordTokenRepository : IRepository<ResetPasswordToken>
{
  public Task<ResetPasswordToken> FindByTokenAndEmailAsync(string token, string email); 
}