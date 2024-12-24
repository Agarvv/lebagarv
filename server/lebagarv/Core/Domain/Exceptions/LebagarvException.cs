namespace lebagarv.Core.Domain.Exceptions; 

public class LebagarvException : Exception 
{
    public int code { get; }

    public LebagarvException(string message, int code): base(message)
    {
        code = code;
    }
}
