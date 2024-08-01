// src/cli.ts
import { mainMenuPrompt, loginMenuPrompt, loginPrompt, signUpPrompt, selectEventPrompt, ticketQuantityPrompt, selectSeatsPrompt, confirmPurchasePrompt, paymentPrompt } from "./utils/inquirerPrompts.js";
import { EventService } from "./Services/EventService.js";
import { TicketService } from "./Services/TicketService.js";
import { UserService } from "./Services/UserService.js";
import { PaymentService } from "./Services/PaymentService.js";
import { createEvent, deleteEvent, listEvents } from './Services/eventManagement.js';
import { adminLoginPrompt } from "./utils/inquirerPrompts.js";
import inquirer from "inquirer";
import chalk from "chalk";
const eventService = new EventService();
const ticketService = new TicketService();
const userService = new UserService();
const paymentService = new PaymentService();
export async function main() {
    console.log(chalk.red.bold('Welcome to the Ticketing System'));
    const { userType } = await inquirer.prompt({
        type: 'list',
        name: 'userType',
        message: 'Choose user type:',
        choices: ['Admin', 'User', 'Exit'],
    });
    const admin = {
        username: 'admin@gmail.com',
        password: 'admin123'
    };
    if (userType === 'Admin') {
        const isAdmin = await adminLoginPrompt();
        if (isAdmin) {
            let exit = false;
            while (!exit) {
                const adminAnswers = await inquirer.prompt({
                    type: "list",
                    name: "action",
                    message: "What would you like to do?",
                    choices: ["Create Event", "List Events", "Delete Event", "logOut", "Exit"]
                });
                switch (adminAnswers.action) {
                    case 'Create Event':
                        await createEvent();
                        break;
                    case 'List Events':
                        listEvents();
                        break;
                    case 'Delete Event':
                        const { eventId } = await inquirer.prompt({
                            name: 'eventId',
                            message: 'Enter the ID of the event to delete:'
                        });
                        deleteEvent(parseInt(eventId));
                        break;
                    case "logOut":
                        return main();
                    case 'Exit':
                        exit = true;
                        break;
                    default:
                        console.log("Invalid option.");
                }
            }
        }
        else {
            console.log("Admin login failed");
        }
    }
    else if (userType === "User") {
        let loggedIn = false;
        while (!loggedIn) {
            const { action } = await loginMenuPrompt();
            switch (action) {
                case "Login":
                    const { username, password } = await loginPrompt();
                    const loginSuccess = userService.login(username, password);
                    if (loginSuccess) {
                        console.log("Login Successful");
                        loggedIn = true;
                    }
                    else {
                        console.log("Invalid username and password");
                    }
                    break;
                case "Sign Up":
                    const { username: signUpUsername, password: signUpPassword } = await signUpPrompt();
                    userService.signUp(signUpUsername, signUpPassword);
                    console.log(chalk.green("Sign up successful! You are now logged in."));
                    loggedIn = true;
                    break;
                case "Exit":
                    return main();
                default:
                    console.log("Invalid option.");
            }
        }
        let exit = false;
        while (!exit) {
            const { action } = await mainMenuPrompt();
            switch (action) {
                case 'Browse Events':
                    console.log(chalk.cyan.bold('Available Events:'));
                    listEvents();
                    break;
                case 'Purchase Ticket':
                    listEvents();
                    const availableEvents = eventService.listEvents();
                    const { eventId } = await selectEventPrompt(availableEvents);
                    const selectedEvent = eventService.getEventById(eventId);
                    if (selectedEvent) {
                        const availableSeats = selectedEvent.seats.filter(seat => !seat.reserved).map(seat => seat.seatNumber);
                        if (availableSeats.length === 0) {
                            console.log("No seats available for this event.");
                            break;
                        }
                        const { ticketQuantity } = await ticketQuantityPrompt(selectedEvent.ticketStock);
                        const selectedSeats = await selectSeatsPrompt(availableSeats.map(Number), ticketQuantity);
                        const { confirm } = await confirmPurchasePrompt(selectedEvent, [selectedSeats]);
                        if (confirm) {
                            const paymentDetails = await paymentPrompt();
                            if (paymentDetails.method === 'card') {
                                const paymentSuccessful = paymentService.processPayment(paymentDetails, selectedEvent.price * ticketQuantity);
                                if (paymentSuccessful) {
                                    console.log(chalk.green.bold('Payment Successful with card'));
                                }
                                else {
                                    console.log('Payment Failed.Please try again.');
                                    break;
                                }
                            }
                            else {
                                console.log(chalk.green.bold(`\nPayment will be made at venue.It will be Rs:${selectedEvent.price * ticketQuantity}`));
                            }
                            const currentUser = userService.getCurrentUser();
                            if (!currentUser) {
                                console.log('User not logged in.');
                                break;
                            }
                            let allSeatsReserved = true;
                            for (const seatNumber of [selectedSeats]) {
                                const seatReserved = await eventService.reserveSeat(eventId, ticketQuantity);
                                if (!seatReserved) {
                                    allSeatsReserved = false;
                                    console.log(`Seat reservation failed for seat ${seatNumber}`);
                                    break;
                                }
                            }
                            if (allSeatsReserved) {
                                try {
                                    const tickets = [];
                                    for (const seatNumber of [selectedSeats]) {
                                        const ticket = await ticketService.purchaseTicket(eventId, currentUser.id, seatNumber);
                                        tickets.push(ticket);
                                    }
                                    console.log(chalk.green('Tickets purchased successfully!'));
                                    tickets.forEach(ticket => {
                                        console.log(chalk.green(`Ticket ID: ${ticket.id}, Seats: ${selectedSeats}`));
                                    });
                                    console.log(chalk.green.bold("Enjoy your event!"));
                                }
                                catch (error) {
                                    console.log("Ticket purchase failed. Please try again.");
                                }
                            }
                            else {
                                console.log("Some seats could not be reserved. Please try again.");
                            }
                        }
                    }
                    break;
                case 'View Purchase History':
                    const currentUserHistory = userService.getCurrentUser();
                    if (currentUserHistory) {
                        const tickets = ticketService.getUserTickets(currentUserHistory.id);
                        if (tickets.length > 0) {
                            console.log(chalk.cyan.bold("Your Tickets:"));
                            tickets.forEach(ticket => {
                                const event = eventService.getEventById(ticket.eventId);
                                if (event) {
                                    console.log(chalk.blueBright(`Ticket ID: ${ticket.id}, Event: ${event.name}, Seat: ${ticket.seatNumber}, Date: ${event.date}`));
                                }
                            });
                        }
                        else {
                            console.log("No tickets found for this user.");
                        }
                    }
                    break;
                case 'LogOut':
                    console.log("Logged out successfully.");
                    return main();
                case 'Exit':
                    exit = true;
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid option.");
            }
        }
    }
}
