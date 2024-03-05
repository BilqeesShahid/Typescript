//Assignment 16
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 15. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// initial list of people
//let Guests: string[]=["Abdullah","Sara","Fatima","Yusra","Ali"]
//informing that only two people can be invited
//console.log("Due to limited space,only two people can be invited for dinner")
//removing guests until only two people remains
//while (Guests.length > 2) {
//const removedGuests = Guests.pop();
//console.log(`Sorry ${removedGuests},You are no longer invited to dinner`);
//}
//printing message to remaining two people
//Guests.forEach((Guests) => {
//console.log(`Dear ${Guests},you are still invited to dinner.`)}
//})
//removing the last two guests from the list
//Guests.pop();
//Guests.pop();
//printing final list of guests
//console.log("Final guests list:",Guests);
//Assignment 17
//Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array.
//let Places:string[] = ["Turkey", "Mauritius","America","Indonesia","Saudi Arabia"]
//console.log("Original order:",Places);
//store the array in Alphabetical order.
//console.log("Alphabetical order:",[...Places].sort());
//print array still in original order.
//console.log("Original order after sorting:",Places);
//print array in reverse Alphabetical order.
//console.log("reverse alphabetical order:",[...Places].sort().reverse());
//print array still in original order.
//console.log("original order after reversing sorting:",Places)
//reverse the order of list.
//console.log("reverse order:",Places);
//print original order array after reversing.
//console.log("Original order after reversing:",Places) 
//Assignment 18
//you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//let languages : string[]=["English","Urdu","Chineese","Sindhi"]
//console.log(languages)
//Assignment 19
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Typescript Object Type;
//let teacher={name:"Bilqees Shahid", experience:"10"}
//console.log(teacher.name)
//console.log(teacher["experience"])
//Assignment 20
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Making array Index error:(Printing list of vegetables)
var veges = ["Tomato", "lettuce", "cucumber", "Peas", "chillies", "Potato"];
//console.log(veges[6])//index error number 6 index is not assigned
console.log(veges[3]);
