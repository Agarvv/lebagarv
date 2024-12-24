namespace lebagarv.Core.Domain.Entities.Cars; 

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.ComponentModel.DataAnnotations;


public class CarColor
{
    public int Id { get; set; }
    public string value { get; set; } // color value
}