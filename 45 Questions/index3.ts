//Assignment 11
//Greetings: Start with the array you used in Exercise 10, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
 /*let Names:string[]= ["Sara","Ali","Faizan","Haroon"]
 let message: string= "Do you like to play cricket?"
 console.log(Names[0] +" "+message)
 console.log(Names[1] +" "+message)
 console.log(Names[2] +" "+message)
 console.log(Names[3] +" "+message)*/

 //Assignment 12
 //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
/*let transportation:string[]=["Honda civic","toyota corolla","Cultus"]
transportation.map((items) =>
 console.log(`I would like to own ${items}`))*/

 //Assignment 13
 //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
/*let Guest:string[]=["Sara","Fatima","Yusra"]
Guest.map((items) =>
console.log(`Dear ${items}! you are invited for the dinner today.`)
)*/


//Assignment 14
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*let Guest:string[]=["Sara","Fatima","Faizan","Haroon"]
let cannotAttend:string = "Sara"
console.log(cannotAttend +" "+ "can not attend dinner")
let newGuest:string= "Aisha"
Guest[Guest.indexOf(cannotAttend)]= newGuest
console.log(Guest)
Guest.map((items)=> console.log(`Dear ${items} "you are invited for dinner today`))*/

//Assignment 15
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.let Guest:string[]=["Aisha","Fatima","Sara","Faizan"]
//Part1
/*let Guest:string[]=["Aisha","Fatima","Sara","Faizan"]
//Guest.map((items)=> console.log(`Dear ${items},I found the biggest dinner table so i am inviting the more people.`))
//Part2
let Guestbeg:string = "Haroon"
Guest.unshift(Guestbeg);
//console.log(Guest)
//Part3
let middleguest:string ="Abdullah"
let middleindex=Guest.length/2
Guest.splice(middleindex,0,middleguest)
//console.log(Guest)
//Part4
let endguest:string= "Hassan"
Guest.push(endguest)
//console.log(Guest)
//Part5
Guest.map((items)=> console.log(`Dear ${items}! you are invited on the biggest dinner table today.`))*/









