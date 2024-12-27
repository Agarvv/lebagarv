namespace lebagarv.Infrastructure.Persistence.Repositories; 

using lebagarv.Core.Domain.Entities; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface IUserRepository : IRepository<User>
{
   Task<bool> ExistsByEmailAsync(string email);
   Task<User> FindByEmailAsync(string email); 
   Task<User> FindByIdAsync(int id); 
}