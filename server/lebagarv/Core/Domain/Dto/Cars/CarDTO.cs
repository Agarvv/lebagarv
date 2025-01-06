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
    public string CarModel { get; set; }
    public string Bodywork { get; set; }
    public string Description { get; set; }
    public int Doors { get; set; }
    public int Seats { get; set; }
    public int Horsepower { get; set; }
    public int Kilometers { get; set; }
    public CarOwnerDTO User { get; set; } 
    public bool IsFavorite { get; set; }
}

