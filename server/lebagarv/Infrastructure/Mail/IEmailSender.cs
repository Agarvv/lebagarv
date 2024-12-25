namespace lebagarv.Infrastructure.Mail; 

public interface IEmailSender 
{
    Task SendEmailAsync(string to, string subject, string body); 
}