namespace lebagarv.Core.Application.Services.Chat; 

using lebagarv.Infrastructure.Persistence.Repositories.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Core.Domain.Exceptions; 
using lebagarv.Core.Domain.Entities.Chat;
using lebagarv.Core.Domain.Dto.Chat;



public class ChatService : IChatService 
{
    private readonly IChatRepository _chatRepository; 
    private readonly IUserRepository _userRepository; 
    
    public ChatService(IChatRepository chatRepository, IUserRepository userRepository) 
    {
        _chatRepository = chatRepository; 
        _userRepository = userRepository; 
    }
    
    public async Task<IEnumerable<ChatDTO>> GetUserChats(int userId)
    {
        var chats = _chatRepository.GetAllByUserId(userId);
        
        var chatsDto = new List<ChatDTO>(); 
        
        foreach(var chat in chats)
        {
            var userToDisplayInfoId = chat.SenderId == chat.ReceiverId ? chat.ReceiverId : chat.SenderId; 
            
            var userToDisplayInfo = await _userRepository.FindByIdAsync(userToDisplayInfoId); 
            
            chatsDto.Add(chat.toChatDto(userToDisplayInfo.toChatUserToDisplayInfo())); 
        }
        
        return chatsDto;  
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