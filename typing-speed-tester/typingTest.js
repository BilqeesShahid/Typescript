import readline from "readline";
import chalk from "chalk";
export const passages = {
    basic: "The quick brown fox jumps over the lazy dog. The dog barks aloud. Birds are singing in the trees. The sun shines brightly in sky.",
    random: "xlr8 zqplm dwrop jsru qpkbm5 kjsj94d hdhf7 dhjhd fjk2 l8d8 zhdh dh72 w2n3 dh83 dj93 dncj f2hf u32b fjf4 jfb3 hdf8.",
    technical: "In computing, a hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values."
};
export const executeTest = async (config) => {
    console.log(chalk.yellow('\nTyping test starting...'));
    const passage = passages[config.difficulty];
    console.log(chalk.red(`\nType the following passage:\nYou have ${config.duration} seconds to complete the test.`));
    console.log(chalk.cyan(passage));
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const startTime = new Date().getTime();
    let userInput = '';
    // Use rl.question to allow multi-line input collection
    const getInput = async () => {
        return new Promise((resolve) => {
            rl.question('', (input) => {
                userInput += input + ' ';
                resolve();
            });
        });
    };
    // Collect input for the duration
    while (new Date().getTime() - startTime < config.duration * 1000) {
        await getInput();
    }
    rl.close();
    return typingTest(config.duration, passage, userInput);
};
const typingTest = async (duration, passage, userInput) => {
    const passageWords = passage.split(/\s+/);
    const wordsTyped = userInput.trim().split(/\s+/);
    let correctWords = 0;
    let passageIndex = 0;
    wordsTyped.forEach((word) => {
        if (word === passageWords[passageIndex]) {
            correctWords++;
            passageIndex++;
        }
        else {
            for (let i = 1; i < 3; i++) {
                if (passageWords[passageIndex + 1] && word === passageWords[passageIndex + i]) {
                    correctWords++;
                    passageIndex += i + 1;
                    break;
                }
            }
        }
    });
    const incorrectWords = wordsTyped.length - correctWords;
    const accuracy = wordsTyped.length > 0 ? (correctWords / wordsTyped.length) * 100 : 0;
    const wpm = (wordsTyped.length / duration) * 60;
    return { wpm, correctWords, incorrectWords, accuracy };
};
export const displayResults = (result) => {
    console.log(chalk.yellow(`\nTest completed! Here are your results:`));
    console.log(chalk.blue(`Words Per Minute (WPM): ${result.wpm.toFixed(2)}`));
    console.log(chalk.green(`Correct Words: ${result.correctWords}`));
    console.log(chalk.red(`Incorrect Words: ${result.incorrectWords}`));
    console.log(chalk.magenta(`Accuracy: ${result.accuracy.toFixed(2)}%`));
};
