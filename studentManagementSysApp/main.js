class school {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teaObj) {
        this.teachers.push(teaObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class teacher extends student {
}
//schools
let school1 = new school("Metropolitan");
let school2 = new school("SM Public");
let school3 = new school("Al-Behria");
//student
let s1 = new student("Ahmed", 15, "Metropolitan");
let s2 = new student("Haroon", 14, "SM Public");
let s3 = new student("Zaman", 16, "Al-Behria");
//teacher
let t1 = new teacher("Amna", 35, "Metropolitan");
let t2 = new teacher("uzma", 30, "SM Public");
let t3 = new teacher("komal", 25, "Al-Behria");
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
//teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(school1);
console.log(school2);
console.log(school3);
export {};
//console.log(s1)
//console.log(s2)
//console.log(s3)
//console.log(t1)
//console.log(t2)
//console.log(t3)
