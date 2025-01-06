namespace lebagarv.Core.Domain.Entities.Favorites
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using lebagarv.Core.Domain.Entities.Cars; 
    
    public class Favorites
    {
        public int Id { get; set; }
        
        [Required]
        public int UserId { get; set; }
        
        [Required]
        [ForeignKey("Car")]
        public int CarId { get; set; }
        public virtual Car Car { get; set; } 
    }
    
}