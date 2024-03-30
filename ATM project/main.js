#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // dollars
let myPin = 1436;
let pinNumber = await inquirer.prompt([{
        name: "pin",
        message: "Enter your Pin No",
        type: "number"
    }]);
//console.log(pinNumber)
if (pinNumber.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select your transaction!",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "select your amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"] //fast cash option H.w # 2
            }]);
        myBalance -= amountAns.amount;
        {
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }]);
        if (amountAns.amount >= myBalance) {
            console.log("Insufficient balance"); //code for insufficient balance H.W # 3 
        }
        else {
            myBalance -= amountAns.amount; // =,-=,+=,
            console.log(`your transaction is successful! remaining balance is ${myBalance}`); //using literals H.W # 1
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
