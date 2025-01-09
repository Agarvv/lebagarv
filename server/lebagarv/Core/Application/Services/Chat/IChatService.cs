namespace lebagarv.Core.Application.Services.Chat;

using lebagarv.Core.Domain.Dto.Chat;
using lebagarv.Core.Domain.Entities.Chat;
using lebagarv.Presentation.Models.Requests.Chat; 

public interface IChatService 
{
    Task<IEnumerable<ChatDTO>> GetUserChatsAsync(int userId); 
    Task<ChatDTO> GetChatByIdAsync(int id, int userId); 
    Task<int>  CreateChatAsync(int carId, int receiverId, int userId);
    Task<MessageDTO> CreateMessageAsync(MessageRequest request, int userId); 
    void VerifyChatAuthorization(Chat chat, int userId); 
} 