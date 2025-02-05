import { CreditCardPayment, PayPalPayment, CashPayment, PaymentProcessor } from "./../../Solid/3.Lsp/Payment";

describe("Payment Processor", () => {
    test("CreditCardPayment should process payment correctly", () => {
        const creditCardPayment = new CreditCardPayment();
        console.log = jest.fn();
        creditCardPayment.processPayment(100);
        expect(console.log).toHaveBeenCalledWith("Processing credit card payment of $100");
    });

    test("PayPalPayment should process payment correctly", () => {
        const payPalPayment = new PayPalPayment();
        console.log = jest.fn();
        payPalPayment.processPayment(200);
        expect(console.log).toHaveBeenCalledWith("Processing PayPal payment of $200");
    });

    test("CashPayment should accept cash at the counter", () => {
        const cashPayment = new CashPayment();
        console.log = jest.fn();
        cashPayment.pay(50);
        expect(console.log).toHaveBeenCalledWith("Accepting cash payment of $50 at the counter.");
    });
});
