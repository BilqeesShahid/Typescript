#! /usr/bin/env node 

import inquirer from "inquirer";
let toDos = [];
let condition= true;
while(condition){

let addTask=await  inquirer.prompt([{
    name:"todo",
    type:"input",
    message:"What do you want in your arrays?"
},
{
    name:"addMore",
    type:"confirm",
    message:"Do you want to add more?",
    default:"false"

}]
);
toDos.push(addTask.todo)
condition=addTask.addMore
console.log(toDos)
}