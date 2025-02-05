// Define an interface for Online Payments
interface OnlinePayment {
    processPayment(amount: number): void;
}

// Base class for online payments
abstract class PaymentProcessor implements OnlinePayment {
    abstract processPayment(amount: number): void;
}

// Credit Card Payment
class CreditCardPayment extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        console.log("Validating credit card details...");
        console.log("Charging the credit card...");
    }
}

// PayPal Payment
class PayPalPayment extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
        console.log("Redirecting to PayPal...");
        console.log("Completing PayPal transaction...");
    }
}

// Separate class for Cash Payment (Offline)
class CashPayment {
    pay(amount: number): void {
        console.log(`Accepting cash payment of $${amount} at the counter.`);
    }
}

// Function to handle online payments
function handleOnlinePayment(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

// Function to handle offline payments
function handleOfflinePayment(cashPayment: CashPayment, amount: number): void {
    cashPayment.pay(amount);
}

// Test cases
const creditCardPayment = new CreditCardPayment();
handleOnlinePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handleOnlinePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
handleOfflinePayment(cashPayment, 50);
