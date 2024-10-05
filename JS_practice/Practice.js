// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log( id == anotherId)


// function calculateCartItem (val1, val2, ...num1){
//     return (val1, val2, num1)
// }

// console.log(calculateCartItem(100,200,500,800));

// const user = {
//     name: 'Ajay Kumar Sharma',
//     price: 200,
// }

// function handleUser(anyobject){
// return (`User Name is ${anyobject.name} and price is ${anyobject.price}`)
// }

// console.log(handleUser(user));

// let a = 7;

// for (let a = 0; a < 5; a++) {
//     const element =[a];
//     console.log(a);
    

// }

// console.log(a);


// function one (){
//     const myName = 'Ajay'

//     function two() {
//         const countaryName = 'India'
//         console.log(countaryName);
//         console.log(myName);
//     }
//     // console.log(countaryName);   
//  two();
// }
// one();

// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++++

// function addOne(num) {
//     return num + 1
    
// }

// const addTwo = function (num2){
//    if (!num2) {
//     num2 = 0
//     const calculate = num2 + 1;
//     return calculate;
// }else{
//     const calculate2 = num2 + 1
//     return calculate2
// }
//    }
  
// console.log(addTwo);

// console.log(addTwo());

//  addTwo(5)

// "use strict"
// let num = 5;

// console.log(num);


// const birthday = '04.07.2002';
// const age = someCode(birthday);

// console.log(age);

//  Nullish coalescing operator ??: null undefined

// let val1 = 5 ?? 10;
//     val1 = null ?? 20;
//     val1 = undefined ?? 25;
//     val1 = null ?? 45 ?? 20;
 
// console.log(val1);


//  terniary operator  ? 

// // condition ? true : false ;

// let productPrice = 250;

// productPrice <= 500 ? console.log('product price is less' ) : console.log('product price is more')
 

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
     
// }
// console.log(10);

// let index = 0;

// while (index <= 10) {
//     console.log(index);
//    index = index + 1
    
// }

// For of loop

const arr = ['Ajay', 'Manish', 'Krishan', 'Ankit', 'Aman'];

// for (const name of arr) {
//     console.log(name);
//     if (name == arr[3]) {
//         console.log(name);
//         break
//     }
// }

const greetings = 'Hello World';
for (const greet of greetings) {
    if (greet === ' ') {
        continue
    }
    console.log(greet);
}