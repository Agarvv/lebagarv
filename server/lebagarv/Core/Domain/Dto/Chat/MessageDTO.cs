namespace lebagarv.Core.Domain.Dto.Chat; 

using lebagarv.Core.Domain.Dto.Chat; 

public class MessageDTO 
{
    public int Id; 
    public int SenderId; 
    public int ReceiverId; 
    public string Type { get; set; } 
    public string Value { get; set; } 
}