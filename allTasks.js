class Person {
    constructor(name, bathyear, phone_number, address) {
        if (this.constructor == Person) {
            throw 'error this is abstract class'
        }
        this.name = name;
        this.bathyear = bathyear;
        this.phone_number = phone_number;
        this.address = address;
    }
    age(bathyear) {
        return (this.bathyear != 0) && (this.bathyear > 1900) ? 2022 - this.bathyear : `error age number`
    }
    hello() {
        return this.name + " is " + this.age(this.bathyear) + " hello";
    }

}
class Employee extends Person {

    #bonus
    static count = 0
    constructor(name, bathyear, phone_number, address, jopName, salary) {
        super(name, bathyear, phone_number, address, salary);
        this.jopName = jopName;
        this.salary = salary;
        Employee.count++;

    }
    setBonus(bonus) {
        this.bonus = bonus;
    }
    addBonus() {
        return (this.salary + this.bonus)
    }
    printData() {
        return "embloyee : " + this.name + " is " + this.age(this.bathyear) + " years old " + " your job is" + this.jopName + " your salary : " + this.salary + "total salary is  : " + this.addBonus();
    }
    static displayHTRules() {
        return `
        whats staticc
        A static method is a method that belongs to a class, but it does not belong to an instance of that class and this method can be called without the instance or object of that class. Every method in java defaults to a non-static method without static keyword preceding it. Non-static methods can access any static method and static variable, without creating an instance of the object. Let us clarify the differences Below are the various important differences among these pointers as follows:

        Accessing members and methods
        Calling process
        Binding process
        Overriding process
        Memory allocation
        #1: Accessing members and methods
        
        A static method can only access static data members and static methods of another class or same class but cannot access non-static methods and variables. Also, a static method can rewrite the values of any static data member.
        
        A non-static method can access static data members and static methods as well as non-static members and methods of another class or same class, also can change the values of any static data member
        
        `
    }
}
// Student class that inherits from Person class and add need variables and methods. 

class Student extends Person {
    // let pays=0
    static #vate;
    constructor(name, bathyear, phone_number, address, classroom, payment) {
        super(name, bathyear, phone_number, address);
        this.classroom = classroom;
        this.payment = payment;
    }
    setPayment(pays) {
        this.payment += pays;
    }
    totalPayment() {
        return (this.payment)
    }
    printData() {
        return "student : " + this.name + " is " + this.age(this.bathyear) + " years old " + " your classroom is" + this.classroom + " the total payment is  : " + this.totalPayment();
    }
    static setPrivate(element) {
        this.#vate = element;
    }
    static getPrivate() {
        return this.#vate;
    }

}
class ScientificDepartment {
    constructor(name, buildyear, phone_number, address) {
        this.name = name;
        this.buildyear = buildyear;
        this.phone_number = phone_number;
        this.address = address;
    }
    ScientificDepartmentPrint() {
        return " " + this.name + " build year is : " + this.buildyear + "\n" + " address is :  " + this.address + "\n and phone_number is : " + this.phone_number;
    }
}
let man = new Employee;
let m = new Employee;
let an = new Employee;
let mn = new Employee;
man.name = "mohamed";
man.bathyear = 1918;
man.phone_number = "555-555-5555";
man.address = "somewhere";
man.jopName = "insractor";
man.salary = 1000;
man.salary = 1000
// console.log(man.hello())
// console.log(man.address)

man.setBonus(100)
console.log(man.printData())

let student = new Student
student.name = "ashraf";
student.bathyear = 1998;
student.phone_number = "33-777-123";
student.address = "mansoura";
student.classroom = "Javascript";
student.payment = 100
student.setPayment(100)
console.log(student.printData())
console.log(Employee.displayHTRules())
console.log("static variable that counts the number of Employee object :    " + Employee.count)
Student.setPrivate(29999999)
console.log("static method private num Student object :    " + Student.getPrivate())
// person = new Person Error abstract Opj
let aswanUnivercity = new ScientificDepartment;
aswanUnivercity.name = "aswan univercity";
aswanUnivercity.buildyear = 1974;
aswanUnivercity.phone_number = "0973481101";
aswanUnivercity.address = `Sahara district, Aswan district`;
console.log(aswanUnivercity.ScientificDepartmentPrint())
//fourth task
var fruits = ["apple", "strawberry", "banana", "orange", "mango", "aa"]
// test that every element in the given array is a string  
let testArray = ["1s", "2s", "3sa", "4ss", 3, 2, 3, 4]
let test = testArray.filter((element) => { return !(typeof element === 'string' || element instanceof String) })
let fruitsTest = fruits.filter((element) => { return (typeof element === 'string' || element instanceof String) }).length == fruits.length ? true : false
console.log(fruits)
console.log(test)
let testBool = fruitsTest.length == 0 ? false : true

console.log("all of element array fruits is string  ?  ", fruitsTest, "any element is string", testBool)
// test that some of array elements starts with "a" 
let fruitsStartWithA = fruits.filter((element) => { return element.startsWith('a') })
let bool = fruitsStartWithA.length == 0 ? false : true
console.log(`that some of array elements starts with "a" ?  ${bool} \n the length is ${fruitsStartWithA.length}`)
// generate new array filtered from the given array with only elements that starts with "b" or "s"  

let fruitsStartWithBorS = fruits.filter((element) => { return element.startsWith('b') || element.startsWith('s') })
console.log(`that some of array elements starts with "b" or "s" ?  ${fruitsStartWithBorS.length != 0 ? true : false} \n the length is ${fruitsStartWithBorS.length} the elements is : \n ${[...fruitsStartWithBorS]}`)

// use forEach to display all elements of the new array from previous  
var count = 0
let testForEach = fruits.forEach((element) => {
    count++
    console.log(`\n the element ${count} is ${element} `)
})
testForEach
// Make a set that holds countries names. return the numbers of repeated items in set
let arr = ["egypt", "german", "canada","canada", "newslanda", "battra", "battra", "battra", "sudan"]
var set1 = new Set(arr);
console.log(arr.length-set1.size)
// let arr2=arr.filter(x => ) 
// let se2 =new Set( se.keys())
// console.log(se.keys())
// console.log(se.entries())
// se.add(5555);//
// se.delete(20);
// se.clear()

// se.forEach(function(item)
// {let same=""
// let valu=item
//    == item
// })
// function toFindDuplicates(arry) {
//     const uniqueElements = new Set(arry);
//     const filteredElements = arry.filter(item => {
//         if (uniqueElements.has(item)) {
//             uniqueElements.delete(item);
//         } else {
//             return item;
//         }
//     });

//     return [...new Set(uniqueElements)]
// }

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

// let arry = [1, 2, 3, 1, 3, 4, 5];
// var same = []
// for (let i = 0; i < arry.length; i++) {
//     // var pre = arry[--i];
//     if (arry[i] == arry[--i]) same.push(arry[i])
// }
// console.log(same);
// var e = [];
// var c=[]
// const numbers = [65, 44, 12, 4,44];
//  numbers.forEach(myFunction);
// function myFunction(item) {
//   --item ===item?e.push(item):c.push(item);
// }
// console.log(e,c);
// for (let i = 0; i < numbers.length ;i++) {
//     for (let j = 0; j <numbers.length; j++) {
//         numbers[i] == numbers[j]?e.push(numbers[i]) : c.push(numbers[j]);
//     }
// }
// console.log(e,c);