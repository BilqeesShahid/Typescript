// src/services/PaymentService.ts
import { PaymentDetails} from "../models/Payment.js";
import chalk from "chalk";
export class PaymentService {
    public processPayment(paymentDetails: PaymentDetails, amount: number):boolean {
        //simulate payment processing
        console.log(chalk.red(`Processing payment of Rs:${amount} for card number ${paymentDetails.cardNumber}...`));
        //Assume payment is always successful for simplicity
        return true;
    }
}