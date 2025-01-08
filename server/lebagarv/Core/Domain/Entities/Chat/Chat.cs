namespace lebagarv.Core.Domain.Entities.Chat
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using lebagarv.Core.Domain.Dto.Chat; 
    using lebagarv.Core.Domain.Entities.Users; 
    using lebagarv.Core.Domain.Entities.Cars;
    using lebagarv.Core.Domain.Dto.Chat;

    public class Chat
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int SenderId { get; set; }

        [Required]
        public int ReceiverId { get; set; }
        
        [Required]
        [ForeignKey("Car")]
        public int CarId { get; set; }
        public virtual Car Car { get; set; }

        public ICollection<Message> Messages { get; set; } = new List<Message>();
        
        public ChatDTO toChatDto(UserToDisplayInfoDTO userToDisplayInfo) 
        {
            return new ChatDTO()
            {
               Id=this.Id,
               SenderId=this.SenderId,
               ReceiverId=this.ReceiverId,
               Messages=this.Messages.Select(m => m.toMessageDto()), 
               UserToDisplayInfo=userToDisplayInfo,
               Car=this.Car.toShowcaseDto()
            };
            
        }
        
        /* private int GetUserToDisplayInfo(int userId) 
        {
            var userToDisplayInfoId = this.SenderId == userId ? this.ReceiverId : this.SenderId; 
            return userToDisplayInfoId; 
        }*/ 
    }
}