namespace lebagarv.Core.Domain.Dto.Cars; 

public class CarDTO 
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int Price { get; set; } 
    public List<string> Images { get; set; } 
    public int CarYear { get; set; } 
    public string FuelType { get; set; } 
    public string Gearbox { get; set; } 
    public DateTime Date { get; set; } 
    public string City { get; set; } 
    public string Brand { get; set; } 
    public string Color { get; set; } 
}

