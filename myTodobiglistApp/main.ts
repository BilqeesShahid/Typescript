#! /usr/bin/env node

// todolistapp
// array
// operation
// delete

import inquirer from "inquirer";
let todos: string[] = ["Bilqees"]


async function createtodo(todos: string[]) {
    do{
    let welcome = console.log("welcome to the todo list app")
    let operation = await inquirer.prompt({
        type: "list",
        name: "operator",
        message: "what do you want to do?",
        choices: ["Add", "Read", "Update", "Delete"]
    })
    if (operation.operator === "Add") {
        let add = await inquirer.prompt({
            type: "input",
            name: "additems",
            message: "please add items"
        })
        todos.push(add.additems)
        console.log(todos);

    }
    if (operation.operator === "Read") { console.log(todos); }
    if (operation.operator === "Update") {
        let Update = await inquirer.prompt({
            type: "list",
            name: "updateitems",
            message: "please select item to update",
            choices: todos
       })
        let update2 =await inquirer.prompt({
            type:"input",
            name:"updateitems2",
            message:"update item"
        })
        let newtodos = todos.filter(val=> val != Update.updateitems)
        
        todos = [...newtodos,update2.updateitems2]
    }
    
    if (operation.operator === "Delete") {
let remove = await inquirer.prompt({
    type:"list",
    name:"removeitems",
    message:"select item to delete",
     choices: todos
    

}

) 


    }
        
    
    }
while(true)

}

createtodo(todos)
