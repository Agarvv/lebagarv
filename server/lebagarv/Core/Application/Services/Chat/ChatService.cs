namespace lebagarv.Core.Application.Services.Chat; 

using lebagarv.Infrastructure.Persistence.Repositories.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories.Chat.Messages; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Core.Domain.Exceptions; 
using lebagarv.Core.Domain.Entities.Chat;
using lebagarv.Core.Domain.Dto.Chat;
using lebagarv.Presentation.Models.Requests.Chat; 



public class ChatService : IChatService 
{
    private readonly IChatRepository _chatRepository; 
    private readonly IUserRepository _userRepository; 
    private readonly IMessageRepository _messageRepository; 
    
    public ChatService(IChatRepository chatRepository, IUserRepository userRepository, IMessageRepository, messageRepository) 
    {
        _chatRepository = chatRepository; 
        _userRepository = userRepository; 
        _messageRepository = messageRepository; 
    }
    
    public async Task<IEnumerable<ChatDTO>> GetUserChatsAsync(int userId)
    {
        var chats = await _chatRepository.GetAllByUserIdAsync(userId);
        
        var chatsDto = new List<ChatDTO>(); 
        
        foreach(var chat in chats)
        {
            var userToDisplayInfo = await GetUserToDisplayInfoAsync(chat, userId);
            
            chatsDto.Add(chat.toChatDto(userToDisplayInfo)); 
        }
        
        return chatsDto;  
    }
    
    public async Task<ChatDTO> GetChatByIdAsync(int id, int userId)
    {
        var chat = await _chatRepository.GetChatByIdAsync(id); 
        if(chat == null)
        {
            throw new LebagarvException("Chat not found!", 404); 
        }
        
        VerifyChatAuthorization(chat, userId); 
        
        var userToDisplayInfo = await GetUserToDisplayInfoAsync(chat, userId); 
        
        return chat.toChatDto(userToDisplayInfo); 
    }

    
    public async Task CreateChatAsync(int carId, int receiverId, int userId)
    {
        if(await _chatRepository.ExistsByCarIdAsync(carId))
        {
            throw new LebagarvException("You can't chat about this car because you already have a chat with it.", 409); 
        }
        
        var chat = new Chat() 
        {
            SenderId = userId,
            ReceiverId = receiverId,
            CarId = carId
        };
        
        await _chatRepository.AddAsync(chat); 
    }
    
    private async Task<UserToDisplayInfoDTO> GetUserToDisplayInfoAsync(Chat chat, int userId)
    {
        var userToDisplayInfoId = chat.SenderId == userId ? chat.ReceiverId : chat.SenderId; 
        
        var userToDisplayInfo = await _userRepository.FindByIdAsync(userToDisplayInfoId); 
        
        return userToDisplayInfo.toChatUserToDisplayInfo(); 
    }
    
    public async Task<Message> CreateMessageAsync(MessageRequest request, int userId)
    {
        var chat = await _chatRepository.GetChatByIdAsync(id); 
        if(chat == null)
        {
            throw new LebagarvException("Chat not found!", 404); 
        }
        
        VerifyChatAuthorization(chat, userId); 
        
        Message message = new Message()
        {
            Type=request.Type,
            Value=request.Value,
            SenderId=userId,
            ReceiverId=request.ReceiverId 
        }; 
        
        await _messageRepository.SaveAsync(message); 
        
        return message; 
    }
    
    public void VerifyChatAuthorization(Chat chat, int userId)
    {
        if(!chat.SenderId == userId || !chat.ReceiverId == userId)
        {
            throw new LebagarvException("You aren't authorized to interact with this chat.", 409); 
        }
    }
}