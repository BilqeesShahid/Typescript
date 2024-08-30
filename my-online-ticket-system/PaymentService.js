import chalk from "chalk";
export class PaymentService {
    processPayment(paymentDetails, amount) {
        //simulate payment processing
        console.log(chalk.red(`Processing payment of Rs:${amount} for card number ${paymentDetails.cardNumber}...`));
        //Assume payment is always successful for simplicity
        return true;
    }
}
