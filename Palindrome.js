// x= "madam"//Palindrome
// y = "Raju"//Not a palindrome

function ispalindrome(str){

    reversedstr = str.split("").reverse().join("")
    if (str == reversedstr)
    {
        console.log("Given string  is a palindrome: "+ str)
    }
    else{
        console.log("Given string is not a palindrome: "+ str)
    }
}
ispalindrome("madam")
ispalindrome("cat")