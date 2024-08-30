// src/utils/inquirerPrompts.ts
import inquirer from "inquirer";
import { EventService } from "../Services/EventService.js";
import chalk from "chalk";
const eventService = new EventService();
const admin = {
    username: 'admin@gmail.com',
    password: 'admin123'
};
export async function adminLoginPrompt() {
    const { username, password } = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter admin username:',
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter admin password:',
            mask: '*',
        },
    ]);
    if (username === admin.username && password === admin.password) {
        console.log(chalk.green.bold('\nLogin successful. Welcome, Admin!'));
        return true;
    }
    else {
        console.log('Invalid credentials. Please try again.');
        return false;
    }
}
export async function loginMenuPrompt() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'User Menu: Login or Sign Up?',
        choices: ['Login', 'Sign Up', 'Exit'],
    });
    return { action };
}
export async function loginPrompt() {
    const { username, password } = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter username (Gmail address):',
            validate: (input) => {
                // Regular expression for validating Gmail addresses
                const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (!gmailRegex.test(input)) {
                    return 'Please enter a valid Gmail address.';
                }
                return true;
            }
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter password:(six digits)',
            mask: '*',
            validate: input => input.length === 6 ? true : 'Password must be 6 digits long',
        },
    ]);
    return { username, password };
}
export async function signUpPrompt() {
    const { username, password } = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter username (Gmail address):',
            validate: (input) => {
                // Regular expression for validating Gmail addresses
                const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (!gmailRegex.test(input)) {
                    return 'Please enter a valid Gmail address.';
                }
                return true;
            }
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter password:(six digits)',
            mask: '*',
            validate: input => input.length === 6 ? true : 'Password must be 6 digits long',
        },
    ]);
    return { username, password };
}
export async function mainMenuPrompt() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'User Menu: What would you like to do?',
        choices: ['Browse Events', 'Purchase Ticket', 'View Purchase History', 'LogOut', 'Exit'],
    });
    return { action };
}
export async function selectEventPrompt(availableEvents) {
    const choices = availableEvents.map(event => ({
        name: `${event.name} (${event.date})`,
        value: event.id,
    }));
    const { eventId } = await inquirer.prompt({
        type: 'list',
        name: 'eventId',
        message: 'Select an event:',
        choices,
    });
    return { eventId };
}
//   export async function purchaseTicket():Promise<void>{
//     const allEvents=eventService.listEvents();
//     const availableEvents = allEvents.filter(event=> event.ticketStock>0);
//     if (availableEvents.length === 0) {
//         console.log('No events available.');
//     } else {
//         availableEvents.forEach(event => {
//             console.log(chalk.cyan(`\n- ${event.id},${event.name} ${event.date.toDateString()},  ${event.city}, ${event.price},Tickets: ${event.ticketStock}`))
//         });
//     }
//   }
export async function ticketQuantityPrompt(ticketStock) {
    const { ticketQuantity } = await inquirer.prompt({
        type: 'number',
        name: 'ticketQuantity',
        message: `Enter number of tickets (max ${ticketStock}):`,
        validate: (input) => {
            const num = parseInt(input);
            if (isNaN(num)) {
                return 'Please enter a valid number.';
            }
            if (num > 0 && num <= ticketStock) {
                return true;
            }
            return `Please enter a number between 1 and ${ticketStock}.`;
        },
    });
    return { ticketQuantity };
}
export async function selectSeatsPrompt(Seats, Quantity) {
    const choices = Seats.map(seat => ({
        name: `${seat}`,
        value: seat,
    }));
    const { selectedSeats } = await inquirer.prompt({
        type: 'checkbox',
        name: 'selectedSeats',
        message: `Select ${Quantity} seats:`,
        choices: choices,
        validate: (input) => input.length === Quantity ? true : `Please select exactly ${Quantity} seats.`,
    });
    return selectedSeats;
}
export async function confirmPurchasePrompt(selectedEvent, selectedSeats) {
    const seatsString = selectedSeats.join(', ');
    const { confirm } = await inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message: chalk.yellow(`Confirm purchase of  ${selectedSeats} numbers of seat(s) for ${selectedEvent.name} (${selectedEvent.date})?`)
    });
    return { confirm };
}
export async function paymentPrompt() {
    const { paymentMethod } = await inquirer.prompt([
        {
            type: 'list',
            name: 'paymentMethod',
            message: 'Select Payment Method:',
            choices: [{
                    name: 'Card/Debit Card', value: 'card'
                },
                {
                    name: 'Cash at venue', value: 'cash'
                },
            ]
        },
    ]);
    if (paymentMethod === 'card') {
        const { cardNumber, cardHolderName, expirationDate, cvv } = await inquirer.prompt([
            {
                type: 'input',
                name: 'cardNumber',
                message: 'Enter card number:',
            },
            {
                type: 'input',
                name: 'cardholderName',
                message: 'Enter cardholder name:',
            },
            {
                type: 'input',
                name: 'expirationDate',
                message: 'Enter expiration date (YYYY-MM-DD):',
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
            },
            {
                type: 'input',
                name: 'cvv',
                message: 'Enter CVV:',
            },
        ]);
        return { method: 'card', cardNumber, cardHolderName, expirationDate, cvv };
    }
    else {
        return { method: 'cash' };
    }
}
