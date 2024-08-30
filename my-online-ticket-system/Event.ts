//src/models/Event.ts
import { Seat } from "./Seat.js";
export interface Event {
    id: number;
    name: string;
    date: Date;
    time: string;
    city: string;
    price: number;
    ticketStock: number;
    seats: Seat[];
}