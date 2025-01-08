namespace lebagarv.Core.Domain.Dto.Chat; 

using lebagarv.Core.Domain.Dto.Chat; 

public class MessageDTO 
{
    public int Id { get; set; } 
    public int SenderId { get; set; } 
    public int ReceiverId { get; set; } 
    public string Type { get; set; } 
    public string Value { get; set; } 
}   