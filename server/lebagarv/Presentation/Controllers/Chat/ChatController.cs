namespace lebagarv.Presentation.Controllers.Chat; 

using Microsoft.AspNetCore.Mvc; 
using lebagarv.Core.Application.Services.Chat; 
using lebagarv.Core.Domain.Dto.Chat; 

[ApiController]
[Route("/api/lebagarv/chats")]
public class ChatController : ControllerBase 
{
    private readonly IChatService _chatService; 
    
    public ChatController(IChatService chatService) 
    {
        _chatService = chatService; 
    }
    
    [HttpGet]
    public async Task<IActionResult> GetChats() 
    {
        var userId = Int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        
        var chats = _chatService.GetUserChatsAsync(userId);
        
        return Ok(chats); 
    }
}