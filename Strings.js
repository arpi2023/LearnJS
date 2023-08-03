// // var x = "Raju"
// // var y = 'Prasanna'
// // var z= `Sharon`
// // console.log (typeof(x))
// // console.log (typeof(y))
// // console.log (typeof(z))

// //sentence = "This is a Javascript class"

// str1 = "₹5,999";
// str2 = "₹4,999";

// //totalprice = str1 +str2
// totalpriceinstring = "₹10,998";
// //console.log(totalprice)
// str1num = Number(str1.replace("₹","").replace(",",""))
// str2num = Number(str2.replace("₹","").replace(",",""))
// total = str1num +str2num
// //total = Number(str1.replace("₹","").replace(",","")) + Number(str2.replace("₹","").replace(",",""))
// totalinnum = Number(totalpriceinstring.replace("₹","").replace(",",""))

// if (total === totalinnum)
// {
//     console.log("both are equal")
// }


// str3 = "5"//this is a string
// num1 = Number(str3)//converting string to a number
// console.log(typeof(num1))//returns the type of num1


// str4 ="$123"
// num = Number(str4.replace("$",""))//replaces $ with nothing
// console.log(typeof(num))//number
// console.log(num)//123


// //Reverse the string
// stringgiven = "This is a string"
// //reversedstring = stringgiven.reverse()
// //console.log(reversedstring)//stringgiven.reverse is not a function
// reversedstring = stringgiven.split("").reverse().join("")
// //split method to convert from string to array, then use reverse()
// //join method to convert array to string 
// console.log(reversedstring)


// //${variablename} to access variable value
// const name = "Peter"
// const name1 = "Jack"
// const result = `The names are ${name} and ${name1}`
// console.log(result)

// //Two ways to access string characters
// //One way is to treat string as an array

// x = "This is a string"
// console.log(x[3])

// //other way is to use charAt() method
// console.log(x.charAt(2))

// //Javascript strings are immutable
// //we cannot change a specific character in a string instead we can replace a whole string 
// y = "hello"
// y[0]= "H"
// console.log(y)//it is still displaying hello
// y= "Hello"
// console.log(y)//replaced whole string as Hello


// //String length
// a = "cgfcsjc djhajc"
// console.log(a.length)//14


// //Javascript is case sensitive
// caps = "A"
// small = "a"
// console.log(caps === small)


// //Javascript string object
// str= "cjakdqk"
// const strusingnew = new String ("hello")
// console.log(typeof(str))//string
// console.log(typeof(strusingnew))//object
// //It is better to avoid  the object as it occupies more space 

// //String concatenation..using + operator method to join two or more strings
// str1 = "Raju"
// str2 = " G"
// str3 = str1 + str2
// console.log(str3)
// str4 = str1.concat(str2)
// console.log(str4)

// //String concatenation..using concat  method to join two or more strings
// str4 = "Raju"
// str5 = " G"
// str6 = str4.concat(str5)
// console.log(str6)


// //Coersion in Javascript
// //Very important interview question
// num1 = "5"
// console.log(typeof(num1))//type is string
// num2 = 6
// console.log(typeof(num2))//type is number
// total = num1 +num2//at the time od=f addition num2 is also converted to string as num1 is a string
// console.log(total)


// //Any operation other than addition on string results in NaN Not a Number
// str7 = "Hello"
// num3 = 8
// totaladd = str7 - num3
// console.log(totaladd)//=NaN


// // String to Number Conversion: When an operation like subtraction (-), multiplication (*), 
// // division (/) or modulus (%) is performed, all the values that are not number are converted into the 
// // number data type,
// // as these operations can be performed between numbers only.
// str8 = "10"
// num3 = 8
// subvalue = str8 - num3 //checking whether str3 is convertible to number.If yes, it converts
// console.log(subvalue)//2


// str9 = 10
// num4 = "8"
// product = str9 * num4//checking whether str9 is convertible to number.If yes, it converts
// console.log(product)//80

//******************************************************************

// str10 = "THIS IS STRING IN CAPS"
// strinlowercase = str10.toLowerCase()//This method will convert the string to lowercase
// console.log(strinlowercase)

// str11 = "this is string in lowercase"
// strinupperacase = str11.toUpperCase()//This method will convert the string to uppercase
// console.log(strinupperacase)

//using substr
// str12 = "this is string in lowercase"
// str13 = str12.substr(0,4)//it extracts characters having index from 0 to 4
// console.log(str13)


// //Split is a method to convert string to array
// str14 = "this is a string"
// arr1 = str14.split("")//Split the characters, including spaces:
// console.log(arr1)
// arr2 = str14.split(" ")
// console.log(arr2)
// arr3 = str14.split("s")//using s letter as a separator
// console.log(arr3)
// arr4 = str14.split()
// console.log(arr4)//If the separator parameter is omitted, an array with the original string is returned


// //join() is a method that returns an array as a string
// arr5 = ["Raju", "G", "BLR"]
// str15 = arr5.join()//Raju,G,BLR
// console.log(str15)
// str16 = arr5.join("")//RajuGBLR
// console.log(str16)
// str17 = arr5.join("and")//RajuandGandBLR //and as a separator
// console.log(str17)

// // //trim method removes whitespace from both sides of the string
// str18 = "   Raju    "
// lengthofstr18 = str18.length
// console.log(str18)
// console.log("length before trim :"+lengthofstr18)
// str19 = str18.trim()
// lengthofstr19 = str19.length
// console.log(str19)
// console.log("length after trim :"+lengthofstr19)
// console.log(str19)


// //includes() is a method which  returns true if a string contains the specified string
// str20 = "This is a string"
// result = str20.includes("is")//verifies if the string "is" is present in str20 and if yes, it returns true...otherwise..it returns false
// console.log(result)

// // The search() method matches a string against a regular expression **

// // The search() method returns the index (position) of the first match.

// // The search() method returns -1 if no match is found.

// // The search() method is case sensitive.
//  text = "Mr. Blue has a blue house";
// position = text.search("Blue");//first match
// console.log(position)//4


// positionblue = text.search(/blue/);//case sensitive
// console.log(positionblue)//15

