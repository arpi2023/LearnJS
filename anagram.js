//  x = "mary"
//  y = "army"

// all the letters in x are present in y, then it is anagram
// otherwise it is not 
//Anagram
function isanagram(x,y){
str1 = x.toLowerCase().split("").sort().join("")
str2 = y.toLowerCase().split("").sort().join("")
if(str1 == str2)
{
    console.log("Given strings are Anagram")
}
else{
    console.log("Given strings are not Anagram")
    }
}
//calling the function

isanagram("mary","army")