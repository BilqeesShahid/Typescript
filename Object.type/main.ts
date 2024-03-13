 //Object types
 //Infer type:
 let student={name: 'Ahmed',age:21}
console.log(student.name)

//Object explicit type:
let car:{name:string ,
     year:number,
     color: string[],
     mileage: string
    }={name : "corolla",
     year : 2018,
     color:["silver","white","black"],
    mileage: "12km per hour"
}
console.log(car.name,car.year,car.mileage,car.color[0])

//type alias:
type poet={name:string,
age: number
}
let poet:poet={
    name:"Ali",
    age:21
}
console.log(poet.age)
//nested object type:
type Author={
    firstName:string,
    lastName: string};
type Book={
   author :Author
   name: string
}

let myBook : Book={
author:{
    firstName:"Shahid",
    lastName :"Ilyas"},
     name: "My best book"
}
console.log(myBook.author.firstName)
console.log(myBook.author.lastName)
console.log(myBook.name)







