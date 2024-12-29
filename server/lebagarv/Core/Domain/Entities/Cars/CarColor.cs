namespace lebagarv.Core.Domain.Entities.Cars; 

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.ComponentModel.DataAnnotations;


public class CarColor
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string value { get; set; } // color value
}