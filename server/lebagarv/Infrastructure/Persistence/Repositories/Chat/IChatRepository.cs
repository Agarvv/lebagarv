namespace lebagarv.Infrastructure.Persistence.Repositories.Chat; 

using lebagarv.Core.Domain.Entities.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface IChatRepository : IRepository<Chat>
{
    IEnumerable<Chat> GetAllByUserId(int userId); 
    Task<bool> ExistsByCarIdAsync(int carId); 
}