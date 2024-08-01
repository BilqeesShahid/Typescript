import inquirer from "inquirer";
import { promptSignup, promptLogin } from "./utils.js";
import { executeTest } from "./typingTest.js";
import { displayResults } from "./typingTest.js";
import chalk from "chalk";
const main = async () => {
    console.log(chalk.green("Welcome to the Typing Speed Tester!"));
    const { action } = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "Do you want to signup or login?",
        choices: ["signup", "login"]
    });
    let user = null;
    if (action === "signup") {
        user = await promptSignup();
    }
    else {
        user = await promptLogin();
        if (!user) {
            console.log("Invalid login credentials. Exiting...");
        }
    }
    const configureTest = async () => {
        const answers = await inquirer.prompt([
            {
                name: 'duration',
                message: 'Select test duration:',
                type: 'list',
                choices: [
                    { name: '1 minute', value: 60 },
                    { name: '3 minutes', value: 180 }
                ]
            },
            {
                name: 'difficulty',
                message: 'Select difficulty level:',
                type: 'list',
                choices: [
                    { name: 'Basic', value: 'basic' },
                    { name: 'Random', value: 'random' },
                    { name: 'Technical', value: 'technical' }
                ]
            }
        ]);
        return { duration: answers.duration, difficulty: answers.difficulty };
    };
    while (true) {
        const config = await configureTest();
        const result = await executeTest(config);
        displayResults(result);
        const answers = await inquirer.prompt([
            { name: 'continue', message: 'Do you want to take another test?', type: 'confirm' }
        ]);
        if (!answers.continue) {
            console.log(chalk.red('Thank you for using the Online Typing Speed Tester. Goodbye!'));
            break;
        }
    }
};
main();
