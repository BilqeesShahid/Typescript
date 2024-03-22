import inquirer from "inquirer";
type ans ={
    userGuess:number
}
const systemGeneratedNo = Math.floor(Math.random()*10)
//console.log(systemGeneratedNo)
const answer:ans = await inquirer.prompt([{
    type: "number",
    name:"userGuess",
    message:"Enter your guess b/w 1 to 10"
}])
const {userGuess} = answer
console.log(`your guess,${userGuess},systemNumber,${systemGeneratedNo}`)
if (userGuess == systemGeneratedNo){
console.log("yes your answer is correct\n YOU WIN")
}
else{
    console.log("Better luck next time")
}