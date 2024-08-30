export class TicketService {
    tickets = [];
    ticketIdCounter = +1; //for check
    purchaseTicket(eventId, userId, seatNumber) {
        const newTicket = {
            id: this.ticketIdCounter++,
            eventId: eventId,
            userId: userId,
            seatNumber: seatNumber,
            purchaseDate: new Date(), //define toISOString
        };
        this.tickets.push(newTicket);
        return newTicket;
    }
    getUserTickets(userId) {
        return this.tickets.filter(newTicket => newTicket.userId === userId);
    }
}
