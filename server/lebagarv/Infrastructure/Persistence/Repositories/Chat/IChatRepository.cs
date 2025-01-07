namespace lebagarv.Infrastructure.Persistence.Repositories.Chat; 

using lebagarv.Core.Domain.Entities.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface IChatRepository : IRepository<Chat>
{
    IEnumerable<Chat> GetAllByUserId(int userId); 
    Chat GetChatById(int id); 
    Task<bool> ExistsByCarIdAsync(int carId); 
}