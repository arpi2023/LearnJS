// //Functions without and with parameters


// //Functions without parameters
// //Function definition will not occupy RAM memory
// function printmesssage(){
//     console.log("This is a function")
// }

// printmesssage()//invoking or caling the function then only it executes
// //prints that message in the console
// //when calling it occupies memory


// //Functions with parameters(x and y)
// function addition(x,y){
//     console.log(x)
//     console.log(y)
//     console.log("Sum is " +(x+y))
// }

// addition(2,3)//call ing function with arguments 2 and 3


// //Functions with and without return

// function multiplicationwithoutreturn(t,u){
//     console.log ("the product(without return) :"+(t*u))
// }
// multiplicationwithoutreturn(2,3)

// function multiplication(t,u){
//     return t*u
// }
// multiplication(4,6)//this will not print anything since return is not held in any variable(return value will be in memory )
// console.log(multiplication(4,6))//alongwith print function (without holding in a variable we can see or print)
// var v = multiplication(2,3)//Holding it in a variable
// console.log("the multiplied value with return " + v)