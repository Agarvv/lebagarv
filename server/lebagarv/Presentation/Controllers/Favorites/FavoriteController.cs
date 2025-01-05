namespace lebagarv.Presentation.Controllers.Favorites
{
    using Microsoft.AspNetCore.Mvc;
    using lebagarv.Presentation.Models.Request.Favorites;
    using lebagarv.Core.Application.Services.Favorites;
    using System.Security.Claims;

    [ApiController]
    [Route("api/lebagarv/favorites")]
    public class FavoritesController : ControllerBase
    {
        private readonly IFavoritesService _favoritesService;

        public FavoritesController(IFavoritesService favoritesService)
        {
            _favoritesService = favoritesService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var favorites = await _favoritesService.GetUserFavoritesAsync(userId);
            return Ok(favorites);
        }

        [HttpPost]
        public IActionResult AddOrRemove([FromBody] FavoriteRequest request)
        {   
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            string addedOrRemoved = _favoritesService.AddFavoriteAsync(userId, request.ProductId);
            return Ok(addedOrRemoved); 
        }
    }
}