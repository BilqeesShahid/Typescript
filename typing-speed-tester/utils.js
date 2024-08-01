import inquirer from "inquirer";
import { signup, login } from "./user.js";
export const promptSignup = async () => {
    const user = await inquirer.prompt([
        { type: "input", name: "name", message: "Enter your name:" },
        { type: "input", name: "email", message: 'Enter username (Gmail address):',
            validate: (input) => {
                // Regular expression for validating Gmail addresses
                const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (!gmailRegex.test(input)) {
                    return 'Please enter a valid Gmail address.';
                }
                return true;
            } },
        { type: "password", name: "password", message: 'Enter password:(six digits)',
            mask: '*',
            validate: input => input.length === 6 ? true : 'Password must be 6 digits long', },
    ]);
    await signup(user);
    return user;
};
export const promptLogin = async () => {
    const credentials = await inquirer.prompt([
        { type: "input", name: "email", message: 'Enter username (Gmail address):',
            validate: (input) => {
                // Regular expression for validating Gmail addresses
                const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (!gmailRegex.test(input)) {
                    return 'Please enter a valid Gmail address.';
                }
                return true;
            } },
        { type: "password", name: "password", message: 'Enter password:(six digits)',
            mask: '*',
            validate: input => input.length === 6 ? true : 'Password must be 6 digits long', },
    ]);
    return login(credentials.email, credentials.password);
};
