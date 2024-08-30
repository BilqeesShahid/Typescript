// src/models/Payment.ts
export interface PaymentDetails{
    method: 'card'|'cash'
    cardNumber?: string;
    cardHolderName?: string;
    expirationDate?:string;
    cvv?:string;            //cvv: card verification value(may be of three digits)
}