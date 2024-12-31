using lebagarv.Core.Domain.Dto.Chat;

namespace lebagarv.Core.Application.Services.Chat; 

public interface IChatService 
{
    Task<IEnumerable<ChatDTO>> GetUserChats(int userId); 
    Task CreateChat(int carId, int receiverId, int userId);
}