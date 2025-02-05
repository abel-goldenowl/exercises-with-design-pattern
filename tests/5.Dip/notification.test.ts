import { SendNotification, EmailService, SMSService } from "./../../Solid/5.Dip/Notification";

describe("Notification Tests", () => {
    test("SendNotification should send email", () => {
        const emailService = new EmailService();
        const notification = new SendNotification(emailService);

        console.log = jest.fn();
        notification.sendNotification("Test Email");

        expect(console.log).toHaveBeenCalledWith("Sending email with message: Test Email");
    });

    test("SendNotification should send SMS", () => {
        const smsService = new SMSService();
        const notification = new SendNotification(smsService);

        console.log = jest.fn();
        notification.sendNotification("Test SMS");

        expect(console.log).toHaveBeenCalledWith("Sending SMS with message: Test SMS");
    });
});
