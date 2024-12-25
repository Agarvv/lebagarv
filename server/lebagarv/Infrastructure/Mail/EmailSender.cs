namespace lebagarv.Infrastructure.Mail; 

using System.Net.Mail; 

public class EmailSender : IEmailSender 
{
    private readonly SmtpClient _smtpClient; 
    
    public EmailSender(SmtpClient smtpClient) 
    {
        this._smtpClient = smtpClient; 
    }
    
    public async Task SendEmailAsync(string to, string subject, string body) 
    {
        var message = new MailMessage("casluagarv@gmail.com", to)
        {
            Subject = subject,
            Body = body
        }; 
        
        await _smtpClient.SendMailAsync(message); 
    }
}