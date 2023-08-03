//You need to consider numbers from 1 to 100
//If any number is divisible by 3, print "fizz"
// If any number is divisible by 5, print "buzz"
// If any number is divisible by 3 and 5 both, print "fizzbuzz"
// if any above condition is not satisfied then print the number 
for (let i=1; i<=100; i++)
{
    if (i%3 == 0 && i%5 == 0)
    {
        console.log("fizzbuzz")
    }
    else if (i%3 == 0)
    {
        console.log("fizz") 
    }
    else if (i%5 == 0)
    {
        console.log("buzz")  
    }
    else{
        console.log(i)
    }


}