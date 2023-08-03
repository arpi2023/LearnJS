//if statement gets executed if the condition evaluates to true
// if("3" == 3)
// {
//  console.log("This is if block code")
// }

//else gets executed if the condition evaluates to false
// if("3"===3)
// {
//     console.log("This is if block")

// }
// else
// {
//     console.log("This is else block")
// }


//if else statements
// let marks = 80;

// if (marks>90 && marks<=100)
// {
//     console.log("grade is A+")
// }
// else if (marks>80 && marks<=90)
// {
//     console.log("grade is A")
// }
// else if (marks>70 && marks<=80)
// {
//     console.log("grade is B")
// }
// else if (marks>60 && marks<=70)
// {
//     console.log("grade is C")
// }
// else if (marks>50 && marks<=60)
// {
//     console.log("grade is D")
// }
// else
// {
//     console.log("Fail")
// }


//Switch statements
//this statement is used to perform different actions based on different conditions
// let day;
// day = new Date().getDay();

// switch(day)
// {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//             break;
//     case 3:
//         day = "Wednesday";
//             break;
//     case 4:
//         day = "Thursday";
//              break;
//     case 5:
//         day = "Friday";
//             break;
//     case 6:
//         day = "Saturday";
//             break;
//     default:
//         day = "Not available";

           
// }

// console.log(day);


//Default case does not have to be the last case in a switch block
// let day;
// day = new Date().getDay();

// switch(day)
// {
//     default:
//         day = "Not available";
//         break;
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//             break;
//     case 3:
//         day = "Wednesday";
//             break;
//     case 4:
//         day = "Thursday";
//              break;
   
//     case 6:
//         day = "Saturday";
//             break;
  
           
// }

// console.log(day);


//Default case does not have to be the last case in a switch block
//if u omit the break statement , the next case gets executed even if the evaluation does not match the case
// let day;
// day = new Date().getDay();

// switch(day)
// {
//     default:
//         day = "Not available";
        
//     case 0:
//         day = "Sunday";
       
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//             break;
//     case 3:
//         day = "Wednesday";
//             break;
//     case 4:
//         day = "Thursday";
//              break;
   
//     case 6:
//         day = "Saturday";
//             break;
  
           
// }

// console.log(day);



//if no default label is found , the program continues to execute statements after the switch
// let day;
// day = new Date().getDay();

// switch(day)
// {
  
        
//     case 0:
//         day = "Sunday";
//        break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//             break;
//     case 3:
//         day = "Wednesday";
//             break;
//     case 4:
//         day = "Thursday";
//              break;
   
//     case 6:
//         day = "Saturday";
            
  
           
// }
// day = "Someday"
// console.log(day);


//if multiple case matches a case value, first case is selected
// let day;
// day = new Date().getDay();

// switch(day)
// {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//             break;
//     case 5:
//         day = "Wednesday";
//             break;
//     case 4:
//         day = "Thursday";
//              break;
//     case 5:
//         day = "Friday";
//             break;
//     case 6:
//         day = "Saturday";
//             break;
//     default:
//         day = "Not available";

           
// }

// console.log(day);
