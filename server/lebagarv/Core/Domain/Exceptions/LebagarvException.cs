namespace lebagarv.Core.Domain.Exceptions; 

// Custom App Exception
public class LebagarvException : Exception 
{
    public LebagarvException(string message, int code): base(message)
    {
        
    }
}