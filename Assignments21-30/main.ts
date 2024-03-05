//Assignment 21
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
/*let car = 'subaru';
console.log("Is car== 'subaru'? I predict True otherwise false")
console.log(car== 'subaru')
console.log(car==='civic')

let num = 25
console.log("If num== '25'? I predict true otherwise false")
console.log(num ==25)
console.log(num === 24)

let Name :string= "Bilqees"
console.log(Name === "Bilqees")
console.log(Name ==="Shahid")

let fruit = "Apple"
console.log(fruit === "Apple")
console.log(fruit === "orange")

let country = "Pakistan"
console.log(country === "Pakistan")
console.log(country === "Japan")*/

//Assignment 22
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
/*const string1 : string = "Apple"
const string2 : string = "Orange"
console.log(string1 === string2) //strings are equal so it is false
console.log(string1 !== string2)// strings are not equal(!== means not equal so it is true)
// Tests using the lower case function 
const mixedCaseString : string = "HelloWorld"
console.log(mixedCaseString.toLocaleLowerCase() === "helloworld")*/
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//let a :number = 5
//console.log(a == 5)
//console.log(a !== 5)
//console.log(a > 5)
//console.log(a < 5)
//console.log(a >=5)
//console.log(a<= 5)

// Tests using "and" and "or" operators
//console.log(a ==5 && a > 5)//false
//console.log(a == 5 || a > 5)//true
//Test whether an item is in a array or item is not an array
//let fruits:string[]=["Apple","Orange","Banana","Grapes"]
//console.log(fruits.includes("Grapes"))
//console.log(fruits.includes("grapes"))

//Assignment 23
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

//let alien_color = "Green"
//if(alien_color === "Green")
//{console.log('Player just get 5 points')}
//if(alien_color === "Red")
//{console.log('Player just get 5 points')}

//Assignment 24
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.
//let alien_color = "Green"
//if(alien_color === "Green")
//if(alien_color === "Red")

//{console.log('Player just get 5 points for shooting the alien')}
//else{console.log('The player just earned 10 points')}

//Assignment 25
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
/*let alien_color:string  = "Green"
alien_color = "Red"
if(alien_color === "Green")

{console.log('The player earned 5 points')}

else if(alien_color === "Yellow")
{console.log('The player earned 10 points')}
else if(alien_color === "Red")
{console.log('The player earned 15 points')}*/


//Assignment 26
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

/*let age:number = 89

if(age <= 2)
{console.log("The person is baby")}
else if(age >=2 && age < 4)
{console.log("The person is toddler")}
else if( age >= 4 && age < 13)
{console.log("The person is a kid")}
else if(age >= 13 && age <20)
{console.log("The person is teenager")}
else if(age >= 20 && age < 65)
{console.log("The person is adult")}
else if(age >= 65 && age > 65)
{console.log("The person is older")}*/

//Assignment 27
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
/*let favorite_fruits:string[] = ["Apple","Strawberries","Orange"]
if(favorite_fruits.includes("Apple"))
{console.log("I really like Apples!")}
if(favorite_fruits.includes("Strawberries"))
{console.log("I really like Strawberries!")}
if(favorite_fruits.includes("Orange"))
{console.log("I really like Orange!")}
if(favorite_fruits.includes("Bananas"))
{console.log("I really like Bananas!")}
else{console.log("I dont like banana much")}*/

//Assignment 28
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
/*let employee : string[]=["Admin","Haroon","Faizan","Ali","Hassan"]
for(let i=0 ; i<=employee.length; i++)
if(employee[i]== "Admin")
{console.log("Hello Admin! would you like to see status report")}
else{console.log(`Hello ${employee[i]},thank you for logging in again`)}

//console.log(employee[i])*/

//Assignment 29
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.
/*let usernames: string[]=["Ahmed","Haroon","Faizan","Ali","Hassan"]
if(usernames.length ===0)
{console.log("We need to find some users")}
else{
for(let i=0 ;i<usernames.length; i++);
console.log(usernames)}*/
//2nd option
/*let Usernames: string[]=[]
if(Usernames.length ===0)
{console.log("We need to find some users")}
else{
for(let i=0 ;i<Usernames.length; i++);
console.log(Usernames)}*/

//Assignment 30
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
/*let current_users:string[]=["mahnoor","uzma","amna","sara","ali"]

let new_users:string[]=["sania","SARA","aliya","hussnain","AMNA"]
for(let new_user of new_users){
let isAvailable = true;
for(let current_user of current_users){

if(new_user.toLowerCase()=== current_user.toLowerCase())
{console.log(`username ${new_user} is already taken.Please choose a different username`);
isAvailable = false;
break;}}
if(isAvailable)
{console.log(`username "${new_user}"is available`)}*/


}


















































































































