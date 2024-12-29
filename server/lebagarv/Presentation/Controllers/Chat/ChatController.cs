namespace lebagarv.Presentation.Controllers.Chat; 

using Microsoft.AspNetCore.Mvc; 
using lebagarv.Core.Application.Services.Chat; 

[ApiController]
[Route("/api/lebagarv/chats")]
public class ChatController : ControllerBase 
{
    private readonly IChatService _chatService; 
    
    public ChatController(IChatService chatService) 
    {
        _chatService = chatService; 
    }
    
}