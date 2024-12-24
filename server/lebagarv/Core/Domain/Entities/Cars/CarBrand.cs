namespace lebagarv.Core.Domain.Entities.Cars; 

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.ComponentModel.DataAnnotations;

public class CarBrand 
{
    public int Id { get; set; }
    public string value { get; set; } // brand value
}