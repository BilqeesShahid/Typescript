// src/services/EventService.ts

import {Event} from "../models/Event.js";
import {Seat} from "../models/Seat.js";
 import { eventService} from "./eventManagement.js";
 import { listAllEvents} from "./eventManagement.js";
 import chalk from "chalk";


export class EventService {
    private events: Array<Event> = [];
    constructor() {
        this.events =[{
            id: 1,
            name: "Concert A",
            date: new Date,
            time:"20:00",
            city:"Karachi",
            price: 500,
            ticketStock:50,           
            seats: this.generateSeats(50)
        
            
            },
        {
            id: 2,
            name: "Concert B",
            date: new Date(),
            time: "18:00",
            city:"Lahore",
            price: 500,
            ticketStock:100,
            seats:this.generateSeats(100),
        }
        //Add more events if needed.
    ];
    }
     
  public addEvent(event:Event): void{
    this.events.push(event);
    console.log(chalk.green("Event created successfully!")); 
    console.log(this.events);
    }
   
    public listEvents():Array<Event> {
        return this.events;
    }   
    
     public getEventById(eventId: number): Event | undefined {
        return this.events.find(event => event.id=== eventId);
        }
   public deleteEvent(id: number): boolean {
        const index = this.events.findIndex(event => event.id === id);
        if (index !== -1) {
            this.events.splice(index, 1);
            console.log(`Event with id ${id} deleted successfully.`);
            return true;
        } else {
            console.log(`Event with id ${id} not found.`);
            return false;
        }
    }
    public reserveSeat(eventId:number, seatNumber:string): boolean {
        const event = this.getEventById(eventId);
        if(event){
            const seat = event.seats.find(seat => seat.seatNumber === seatNumber); 
            if(seat &&  !seat.reserved){
                seat.reserved = true;
                return true;
            }
        }
        return false;
    }
     public generateSeats(ticketStock: number): Seat[] {
         const seats:Seat[]=[];
         for(let i=1; i<=ticketStock; i++){
            seats.push({seatNumber:i,reserved:false})
         }
         return seats;
        }
        
    }


  
 
