namespace lebagarv.Core.Domain.Entities.Cars; 

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using lebagarv.Core.Domain.Dto.Cars; 

public class Car
{ 
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(255)]
    public string Title { get; set; }

    public List<string> Images { get; set; } = new List<string>(); 

    [Required]
    [ForeignKey("CarBrand")]
    public int CarBrandId { get; set; } 
    public virtual CarBrand CarBrand { get; set; }

    [Required]
    public string CarModel { get; set; } 

    [Required]
    public int CarYear { get; set; } 

    [Required]
    public string FuelType { get; set; } 

    [Required]
    public string Gearbox { get; set; } 

    [Required]
    public string Bodywork { get; set; }

    [Required]
    [ForeignKey("CarColor")]
    public int Color { get; set; }
    public virtual CarColor CarColor { get; set; }

    [Required]
    public string Description { get; set; } 

    [Required]
    public int Doors { get; set; } 

    [Required]
    public int Seats { get; set; } 

    [Required]
    public int Horsepower { get; set; } 

    [Required]
    public int Kilometers { get; set; } 
        
    [Required]
    public string City { get; set; }
    
    public DateTime Date { get; set; } = DateTime.Now; 

    [Required]
    public int Price { get; set; } 
        
    public CarDTO toDto() 
    {
        return new CarDTO()
        {
             Id=this.Id,
             Title=this.Title,
             Price=this.Price,
             Images=this.Images,
             CarYear=this.CarYear,
             FuelType=this.FuelType,
             Gearbox=this.Gearbox,
             City=this.City,
             Date=this.Date,
             Color=this.CarColor.value,
             Brand=this.CarBrand.value 
        }; 
    }
        
    public CarShowcaseDTO toShowcaseDto() 
    {
        return new CarShowcaseDTO() 
        {
        Title = this.Title ?? string.Empty,
        Price = this.Price,
        Images = this.Images ?? new List<string>(),
        City = this.City ?? string.Empty, 
        Brand = this.CarBrand?.value ?? string.Empty 
        }; 
   }
}