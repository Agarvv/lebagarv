namespace lebagarv.Core.Domain.Dto.Chat; 

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using lebagarv.Core.Domain.Dto.Chat;
using lebagarv.Core.Domain.Dto.Cars; 

public class ChatDTO 
{
    public int Id { get; set; }
    public int SenderId { get; set; }
    public int ReceiverId { get; set; } 
    public ICollection<MessageDTO> Messages { get; set; } = new List<MessageDTO>();
    public UserToDisplayInfoDTO UserToDisplayInfo { get; set; } 
    public CarShowcaseDTO Car { get; set; }
}