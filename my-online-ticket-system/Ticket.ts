import { TimeLike } from "fs";

// src/models/Ticket.ts
export interface Ticket {
    id: number;
    eventId: number;
    userId:number;
    seatNumber:string|number;
    purchaseDate: Date;
    
}
 