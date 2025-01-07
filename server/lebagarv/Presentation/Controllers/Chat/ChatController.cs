namespace lebagarv.Presentation.Controllers.Chat; 

using Microsoft.AspNetCore.Mvc; 
using lebagarv.Core.Application.Services.Chat; 
using lebagarv.Core.Domain.Dto.Chat; 
using lebagarv.Presentation.Models.Request.Chat;
using System.Security.Claims;

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
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        
        var chats = await _chatService.GetUserChats(userId);
        
        return Ok(chats); 
    
    }
    
    [HttpPost("new")]
    public async Task<IActionResult> CreateNewChat(CreateChatRequest request) 
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        
        await _chatService.CreateChat(request.CarId, request.ReceiverId, userId); 
        
        return Ok($"Chat created"); 
    }
}