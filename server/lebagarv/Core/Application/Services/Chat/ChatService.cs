namespace lebagarv.Core.Application.Services.Chat; 

using lebagarv.Infrastructure.Persistence.Repositories.Chat; 
using lebagarv.Core.Domain.Exceptions; 
using lebagarv.Core.Domain.Entities.Chat; 


public class ChatService : IChatService 
{
    private readonly IChatRepository _chatRepository; 
    public ChatService(IChatRepository chatRepository) 
    {
        _chatRepository = chatRepository; 
    }
    
    public async Task GetUserChatsAsync(int userId) 
    {
        var chats = _chatRepository.GetAllByUserId(userId); 
        
        return chats.Select(c => c.toChatDto(c, userId))
    }
    
    public async Task CreateChat(int carId, int receiverId, int userId)
    {
        if(_chatRepository.ExistsByCarId(carId))
        {
            throw new LebagarvException("You Cant Chat to this car because you already have a chat with.", 409); 
        }
        
        var chat = new Chat() 
        {
            SenderId=userId,
            ReceiverId=receiverId,
            CarId=carId
        }
        
        await _chatRepository.AddAsync(chat); 
    }
}