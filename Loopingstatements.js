//for ,do-while and while loops --before ES6
// for of , for in , each, foreach loops -- after ES6
//Requirement is to print "This is Javascript"---  100 times

//for loop--loops through a block of code a number of times
//Expression 1 is executed one time before the execution of code block(initialisation)
//Expresiion 2 defines the condition for executing the block of code(condition)
//Expression 3 is executed every time  after the code block has been executed(incerement/decrement)

// let i;

// for (i=1; i<=100;i++)
// {
    
//     console.log("This is Javascript")
    
//     console.log ("for loop is executed "+ (i) + " times")
// }

//Following loop executes infinite number of times untill memory crash in your system .This is infinite for loop
// let i;
// for (i=5; i>=5; i++)
// {
//     console.log("This is Javscript class")
// }



//while loop

// var i=1;//initialization
// while(i<=5)//condition
// {

// console.log("This is a Javascript class")
// i++;//increment/decrement
// }


//do-while loops

// let i =1;
// do
// {

//     console.log("This is a Javascript class");
//     i++
// }while(i<=5)


// do -while loop always executed atleast once,
// even if the condition is false because the code block is executed before the condition is tested
// let i =6;
// do
// {

//     console.log("This is a Javascript class");
//     i++
// }while(i<=5)

// // for of loop
// let colors = ["red", "green", "blue"]
// for (const i of colors)
// {
//     console.log (i)
// }

// let  x =[1,2,3,4,5]
// let y =['a','b','c','d','e','f']
// let z =[]
// for (const i of x)
// {
//     z += i;
//     for(const j of y)
//     {
//         z+=j;
//     }
// }
// console.log(z)