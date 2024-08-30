import inquirer from 'inquirer';
import { EventService } from '../Services/EventService.js';
import chalk from "chalk";
export const eventService = new EventService();
export async function createEvent() {
    const answers = await inquirer.prompt([{
            type: "input",
            name: "id",
            message: "Enter event id:"
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter event name:'
        },
        {
            type: 'input',
            name: 'date',
            message: 'Enter event date (YYYY-MM-DD):',
            validate: (input) => {
                const date = new Date(input);
                if (isNaN(date.getTime())) {
                    return 'Invalid date format!';
                }
                if (date < new Date()) {
                    return 'Date must be in the future!';
                }
                return true;
            }
        }, {
            type: 'input',
            name: 'time',
            message: 'Enter the time of the Event!'
        },
        {
            type: 'input',
            name: 'city',
            message: 'Enter event city:'
        }, {
            type: "input",
            name: "price",
            message: "Enter ticket price:",
        },
        {
            type: 'number',
            name: 'ticketStock',
            message: 'Enter number of tickets available:',
            validate: (input) => {
                return input > 0 ? true : 'Ticket stock must be greater than zero!';
            }
        },
        {
            type: "input",
            name: "seats",
            message: "These are number of tickets available:"
        },
    ]);
    await listAllEvents(answers);
}
export async function listAllEvents(answers) {
    const eventDate = new Date(answers.date);
    const newEvent = {
        id: eventService.listEvents().length + 1, //generate new id based on length of events.
        name: answers.name,
        date: eventDate,
        time: answers.time,
        city: answers.city,
        price: parseFloat(answers.price),
        ticketStock: answers.ticketStock,
        seats: eventService.generateSeats(parseInt(answers.ticketStock)), // Generate seats based on ticket stock
    };
    // Validate date
    if (eventDate <= new Date()) {
        console.log('Error: Event date must be in the future.');
        return;
    }
    console.log(newEvent);
    eventService.addEvent(newEvent);
    console.log(chalk.green('Event added successfully!'));
    listEvents(); //list events after adding new One
}
export function listEvents() {
    const availableEvents = eventService.listEvents();
    if (availableEvents.length === 0) {
        console.log('No events available.');
    }
    else {
        availableEvents.forEach(event => {
            console.log(chalk.cyan(`\n- ${event.id},${event.name} ${event.date.toDateString()},  ${event.city}, ${event.price},Tickets: ${event.ticketStock}`));
        });
    }
}
export function deleteEvent(eventId) {
    const event = eventService.getEventById(eventId);
    if (event) {
        eventService.deleteEvent(eventId);
        console.log(`Event with ID ${eventId} deleted successfully.`);
    }
    else {
        console.log(`Event with ID ${eventId} not found.`);
    }
}
