const student  =
{
    "stuname" :"Arpitha",
    "Lastname":"Sathari",
    "rollno": 787

}

// //one syntax to access properties in object
// console.log(student.stuname)
// console.log(student.rollno)
// //other syntax to access properties in object
// console.log(student["stuname"])
// console.log(student["Lastname"])

// //adding a property to the object
// student["subject"]= "Maths"
// //accessing the object added
// console.log(student.subject)

// //edit the property
// student["Lastname"] = "Kesineni"
// console.log(student.Lastname)

// //Trying to access property which is not present in the object
// console.log(student.place)



// //delete the property
// delete student["rollno"]

//trying to access property which is not available in object
// console.log(student["rollno"])

const employees ={
   "emp1": "Murali",
   "emp2": "kRISHNA",
   "emp3": "SHARMA",
   "emp4": "KHAN",
}

//Looping the values of object

//for in loop
for( let i in  employees)
{
    console.log("loop starts")
    console.log(i)
    console.log(employees[i])
    console.log("loop ends")
}