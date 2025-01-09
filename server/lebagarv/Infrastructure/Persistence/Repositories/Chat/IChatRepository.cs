namespace lebagarv.Infrastructure.Persistence.Repositories.Chat; 

using lebagarv.Core.Domain.Entities.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface IChatRepository : IRepository<Chat>
{
    Task<IEnumerable<Chat>> GetAllByUserIdAsync(int userId); 
    Task<Chat> GetChatByIdAsync(int id);  
    Task<Chat> GetByCarAndUserIdAsync(int carId, int userId);
    Task<bool> ExistsByCarIdAsync(int carId); 
}