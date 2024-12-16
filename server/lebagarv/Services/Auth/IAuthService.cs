
public interface IAuthService 
{
    Task<int> RegisterUser();
    Task<string> LoginUser(); 
}