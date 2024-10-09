/* 
OOP's is a programming paradigm, 
Paradigm means what is the structure of write the code

Objects are the collection of properties and methods 
*/
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     // Method inside the class 
//     greet(){
//         console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old.`)
//     }
// }

// let person = new Person('Ajay', 23)
// person.greet()

// new Person('Ajay', 23).greet()

function user (userName, mailId, password){
    this.userName = userName
    this.mailId = mailId
    this.password = password

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
        
    }

    return this
}

const userOne = new user('Ajay', 'ajay@gmail.com', '123456')
const userTwo = new user ('Manish', 'manish@gmail.com', '1234')
console.log(userOne);
console.log(userTwo);
