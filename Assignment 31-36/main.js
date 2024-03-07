"use strict";
//Assignment 31
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
/*let numbers:number[]=[1,2,3,4,5,6,7,8,9]
for(let number of numbers){
    if(number== 1)
    {console.log(`${number}st`)}
else if(number==2)
{console.log(`${number}nd`)}
else if(number==3)
{console.log(`${number}rd`)}

else{
console.log(`${number}th`)}
}*/
//Assignment 32
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
//let fav_pizza:string[]=["Chicken tikka","Fajita","cheese lovers"]
//for(let pizza of fav_pizza){
//console.log(pizza)}
//console.log("\n")
//for(let pizza of fav_pizza){console.log(`I really like ${pizza} pizza`)}
//console.log('I really love pizza!')
//Assignment 33
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//let animals:string[]=["dog","cat","rabbit"]
//for(let animal of animals){
//console.log(animal)}
//for(let animal of animals){
//console.log(`A ${animal} would make a great pet`)}
//console.log('Any of these animals would make a great pet')
//Assignment 34
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
/*function makeShirt (size : string , text:string): void {
    console.log(`/n You order ${size} shirt that says ${text}`)
}

makeShirt('large','"I love typescript!"')
makeShirt('medium','"Im always there!"')*/
//Assignment 35
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
/*function makeShirt(size : string = 'large' , text:string = 'I love typescript'): void
{console.log(`You order ${size} shirt that says ${text}`)}

makeShirt()
makeShirt('medium')
makeShirt('small','"It is too small"')*/
//Assignment 36
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
/*function describe_city(city :string , country:string="Pakistan"): void
{console.log(`${city} is the city of ${country}`)}



describe_city('Karachi')
describe_city('Islamabad')
describe_city('Delhi','"India"')*/
