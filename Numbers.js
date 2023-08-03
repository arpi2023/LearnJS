// x = 4.0
// y = 10
// z = String (y)//converting y to string
// console.log(typeof(z))// returns string
// console.log(y)//number
// console.log(z)//string

// //Coercion is a combination of strings and numbers
// num1 = "hello" - 5
// console.log(num1)//"hello" is not convertible to a number...returns NaN
// console.log(isNaN(num1))

// num2 = "19"-9
// console.log(num2)//"19" is convertible to a number and hence converts to number and then 19-9...returns 10 which is a number
// console.log(isNaN(num2))

// //parseint
// //The parseInt method parses a value as a string and returns the first integer.
// s = 199.98
// t = parseInt(s)
// console.log(t)


// let v1 = parseInt("3.14");
// console.log('Using parseInt("3.14") = '+ v1);


// a = parseInt("100");
// console.log('parseInt("100") = ' +
//     a);
 
// // It returns a Integer until
// // it encounters Not a Number character
// b = parseInt("2018@geeksforgeeks");
// console.log('parseInt("2018@geeksforgeeks") = ' +
//     b);
 
// // It returns NaN on Non numeral character
// c = parseInt("geeksforgeeks@2018");
// console.log('parseInt("geeksforgeeks@2018") = ' +
//     c);
 
// // It returns Integer value of a Floating point Number
// d = parseInt("3.14");
// console.log('parseInt("3.14") = ' + d);
 
// // It returns only first Number it encounters
// e = parseInt("21 7 2018");
// console.log('parseInt("21 7 2018") = ' +
//     e);

// //we can use exponential notations to include too large or too small numbers
// f = 5e9
// console.log(f)
// g = 6e-5
// console.log(g)
// h = 5e-6
// console.log(h)

// //Numbers can also be denoted in hexadecimal notation
// const a1 =  0xff
// console.log(a1)//255
// const b1 = 0x00
// console.log(b1)//0

// //Javascript infinity when calculation is done which exceeds the largest or smallest possible number, 
// //infinity or -infinity is returned
// const c1 = 2/0;
// console.log(c1)//Infinity
// const d1 = -2/0;
// console.log(d1)//-Infinity

// // Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.
// // A BigInt number is created by appending n to the end of an integer
// const value = 161231938239799898912597997888999n
// const value1 =value +1n//161231938239799898912597997889000n
// console.log(value1)


//parsefloat
//The parseFloat() method parses a value as a string and returns the first number.

// // It ignores leading and trailing spaces.
// a = parseFloat(" 100 ")
// console.log('parseFloat(" 100 ") = ' + a);

// // It returns floating point Number until
// // it encounters Not a Number character
// b = parseFloat("2018@geeksforgeeks")
// console.log('parseFloat("2018@geeksforgeeks") = '
// 	+ b);

// // It returns NaN on Non numeral character
// c = parseFloat("geeksforgeeks@2018")
// console.log('parseFloat("geeksforgeeks@2018") = '
// 	+ c);

// d = parseFloat("3.14")
// console.log('parseFloat("3.14") = '
// 	+ d);

// // It returns only first Number it encounters
// e = parseFloat("22 7 2018")
// console.log('parseFloat("22 7 2018") = '
// 	+ e);


// //Javascript Number function is used to convert various datatypes to number
// const a = '23'
// const b = true

// //converting to number
// const result1 = Number(a)
// const result2 = Number(b)
// console.log(result1)//23
// console.log(result2)//1