namespace lebagarv.Infrastructure.Persistence.Repositories; 

using lebagarv.Core.Domain.Entities.Users; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface IUserRepository : IRepository<AppUser>
{
   Task<bool> ExistsByEmailAsync(string email);
   Task<AppUser> FindByEmailAsync(string email); 
   Task<AppUser> FindByIdAsync(int id); 
}