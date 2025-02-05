// Abstraction for notification service
interface NotificationService {
    send(message: string): void;
}

// Email service implementation
class EmailService implements NotificationService {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

// SMS service implementation
class SMSService implements NotificationService {
    send(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}

// High-level module depends on abstraction (NotificationService)
class SendNotification {
    private notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }

    sendNotification(message: string): void {
        this.notificationService.send(message);
    }
}

// Test case executions
const emailNotification = new SendNotification(new EmailService());
emailNotification.sendNotification("Hello via Email!");

const smsNotification = new SendNotification(new SMSService());
smsNotification.sendNotification("Hello via SMS!");
