// src/services/TicketService.ts
import { Ticket} from "../models/Ticket.js";
export class TicketService {
    private tickets: Ticket[]=[];
    private ticketIdCounter=+1;          //for check
    public purchaseTicket(eventId:number,userId:number,seatNumber:number):Ticket{
        
        const newTicket:Ticket = {
            id: this.ticketIdCounter++ ,
            eventId: eventId,
            userId:userId,
            seatNumber:seatNumber,
            purchaseDate:  new Date(),//define toISOString
        };
        this.tickets.push(newTicket);
        return newTicket;
    }
    

    public getUserTickets(userId:number): Ticket[] {
        return this.tickets.filter(newTicket => newTicket.userId === userId);
    }

}