namespace lebagarv.Core.Application.Services.Chat; 

using lebagarv.Infrastructure.Persistence.Repositories.Chat; 


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
        return chats.Select(c => c.toChatDto(c)); 
    }
}