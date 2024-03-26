//Assignment 37
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

/*function cityCountry(city:string , country:string):string{
return `${city},${country}`

}
let c1=cityCountry("Lahore","Pakistan")
let c2=cityCountry("Tokyo","Japan")
let c3=cityCountry("Paris","France")

console.log(c1)
console.log(c2)
console.log(c3)*/

//Assignment 38
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
/*function makeAlbum(artist:string , title:string):{artist:string ,title:string}
{const dictionaries = {
artist:artist.charAt(0).toUpperCase() + artist.slice(1),
title:title.charAt(0).toUpperCase() + title.slice(1)};
return dictionaries;
}
let album =makeAlbum("Atif","Rafta")
console.log(album)

album =makeAlbum("Young Stunners","Downers")
console.log(album)

album =makeAlbum("Bilal","red wave")
console.log(album)*/


//Assignment 39
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

/*function show_magicians(magicians:string[]): void {
   for(const magician of magicians){
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1))

   }
}
const magician:string[]=["ali","hamza","bilal"];
show_magicians(magician)

//Assignment 40
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians:string[]): void {
    for(let i=0 ; i < magicians.length; i++){
        magicians[i] = magicians[i] + " " +  `the great`   
    }
}
const magicians2:string[]=["ali","hamza","bilal"];
make_great(magicians2);
show_magicians(magicians2);

//Assignment 41
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians:string[]): string[] {
    const greatMagicians: string[] = [];
    for(let i=0 ; i < magicians.length; i++){
        greatMagicians.push(magicians[i] + 'the great');   
    }
    return greatMagicians;
}
const magicians3:string[]=["ali","hamza","bilal"];
const greatMagicians2: string[]= make_great2(magicians3);
show_magicians(magicians3)
show_magicians(greatMagicians2)*/

//Assignment 42
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
/*function sandwich(...items:string[]): void {
    console.log("sandwich order:")

for(let i=0 ; i < items.length; i++){
    console.log(`-${items[i]}`)
}
}
console.log('enjoy your sandwich sir!')
sandwich('onion','capsicum','cheese')
sandwich('tomato','cucumber','chicken')
sandwich('mayo sauce','capsicum','chicken')*/

//Assignment 43
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly

/*type car ={
    manufacture : string
    model: string
    [key:string]: any;
}
function createCar(manufacture:string, model:string,optional:Record<string,any>): car
{
    return {
        manufacture,
        model,
        ...optional
}
}
const myCar:car= createCar("Toyota","corolla",{color: "black",year:"2024"})
console.log(myCar)*/






















































































































































































































//Assignment 43
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly




















































