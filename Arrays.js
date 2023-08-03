// arr1 = ["Raju", 979, true, "nvbsjd"]
// console.log(arr1[0])
// console.log(typeof(arr1))
// //Return type of an array is object

//Empty array
//Return type of an array is object
// arr1 =[]
// console.log(typeof(arr1[]))

//Array
// arr2 =[1,9,6,4,6,3]//Declaring an array
// //to find the length of the array
// console.log(arr2.length)

// arr3 =["Raju","g",418,"BLR",true,null]
// //to print the first element
// console.log(arr3[0])

// //to print the last element
// console.log(arr3[5])

// //try to access element which is not part of the array or undefined
// console.log(arr3[6])// we will get undefined

// //To print the whole array
// console.log(arr3)

// //there are many methods to work with array
// //sort the elements
// //arr3 is unsorted array
// arr4 = arr3.sort()
// //After sorting saving it to arr4 array
// console.log(arr4)

// arr5 = ["arpitha", "murali","manju", "prasanna", "sharon"]
// arr6 = arr5.sort()
// console.log(arr6)


// //concat is a method available to join two arrays
// arr6 = ["arpitha", "murali","manju", "prasanna", "sharon"]
// arr7 =["Raju","g",418,"BLR",true,null]
// arrconcat = arr6.concat(arr7)
// console.log(arrconcat)


// //reverse()- reverse the elements of the array
// arr8 = ["arpitha", "murali","manju", "prasanna", "sharon"]
// console.log("Array is")
// console.log(arr8)
// reversedarray = arr8.reverse()
// console.log("Reversed Array is")
// console.log(reversedarray)


// //Adding an element at specific location
// let dailyactivities = ["eat", "sleep"]
// dailyactivities[3]= "exercise"
// console.log(dailyactivities)


// //push adds an element at the end of the array
// let dailyactivity = ["eat", "sleep"]
// dailyactivity.push("read")
// console.log(dailyactivity)


// //unshift is a method used to add element at the start of the array
// let dailyactivitiesun  = ['eat','sleep','repeat']
// dailyactivitiesun.unshift("getup")
// console.log(dailyactivitiesun)

//change the element of the array
// let dailyactivitiesch = ["eat","sleep"]
// dailyactivitiesch[2] = "repeat"
// console.log(dailyactivitiesch)

// let dailyactivitieschange = ["eat","sleep","pop"]
// dailyactivitieschange[2] = "repeat"
// console.log(dailyactivitieschange)



// //pop is a method to remove the last element of the array
// let dailyactivitiespop = ["eat", "sleep", "repeat"]
// dailyactivitiespop.pop()
// console.log(dailyactivitiespop)

// //shift is a method which removes the element at tha start of the array
// let dailyactivitiesshift = ["eat", "sleep", "repeat"] 
// dailyactivitiesshift.shift()
// console.log(dailyactivitiesshift)


// //indexOf searches an element of array and returns its position
// let arr9 = ["eat", "sleep","repeat"]
// console.log(arr9.indexOf("sleep"))



// //includes is a method to check if any array contains a specified element

// let arr10 = ["Raju", "Prasanna", "Sharon"]
// if (arr10.includes("Raju"))
// {
// console.log("It is present in array")
// }
// else{
//     console.log("It is not  present in array")
// }


//slice -selects the part of sn array and returns the new array
// //slice is a method which removes the elements of the array present before the index value specifiied
// //here it removes elements 'sleep' and 'repeat' which is having a index of 0 and 1
// newarr = [ 'sleep', 'repeat' , "sleep well", "trust", "hi"]
// const slicedarr = newarr.slice(2)
// console.log(slicedarr)

//splice is a method which removes or replaces the existing elements and /or adds new elements


