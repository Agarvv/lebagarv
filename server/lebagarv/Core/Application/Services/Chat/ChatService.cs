namespace lebagarv.Core.Application.Services.Chat; 

using lebagarv.Infrastructure.Persistence.Repositories.Chat; 
using lebagarv.Core.Domain.Exceptions; 
using lebagarv.Core.Domain.Entities.Chat;
using lebagarv.Core.Domain.Dto.Chat;

public class ChatService : IChatService 
{
    private readonly IChatRepository _chatRepository; 
    public ChatService(IChatRepository chatRepository) 
    {
        _chatRepository = chatRepository; 
    }
    
    public async Task<IEnumerable<ChatDTO>> GetUserChats(int userId)
    {
        var chats = _chatRepository.GetAllByUserId(userId);
        return chats.Select(c => c.toChatDto(c, userId));
    }

    
    public async Task CreateChat(int carId, int receiverId, int userId)
    {
        if(await _chatRepository.ExistsByCarIdAsync(carId))
        {
            throw new LebagarvException("You Cant Chat to this car because you already have a chat with.", 409); 
        }
        
        var chat = new Chat() 
        {
            SenderId=userId,
            ReceiverId=receiverId,
            CarId=carId
        };
        
        await _chatRepository.AddAsync(chat); 
    }
}