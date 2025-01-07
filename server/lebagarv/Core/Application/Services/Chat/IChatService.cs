using lebagarv.Core.Domain.Dto.Chat;
using lebagarv.Core.Domain.Entities.Chat; 

namespace lebagarv.Core.Application.Services.Chat; 

public interface IChatService 
{
    Task<IEnumerable<ChatDTO>> GetUserChats(int userId); 
    Task<Chat> GetChatByIdAsync(int id, int userId); 
    Task CreateChat(int carId, int receiverId, int userId);
    Task<UserToDisplayInfoDTO> GetUserToDisplayInfo(Chat chat, int userId); 
}