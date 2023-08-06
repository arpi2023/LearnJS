// //class can be created by using keyword class
// class student
// {
//     studentname = "Raju";
//     display(){
//         console.log(this.studentname);
//     }
// }
// //display()//directly you cannot call

// const stud = new student()//creating an object stud for the class student
// //console.log(stud.studentname) accessing through object 
// stud.display()//calling the method through object

// class addition
// {
//     add(x,y)
//     {
//         console.log("first value is :"+x)
//         console.log("second value is :"+y)
//         console.log("sum is :"+(x+y))

//     }
// }
// const sum = new addition()//sum is object
// sum.add(2,3)

// class subtraction
// {
//     constructor()
//     {

//         console.log("this is a constructor")
//     }

// }
// const sub = new subtraction()//When creating the object itself constructed is invoked
// //hence displays message inside constructor
// const sub2 = new subtraction()
// const sub3 = new subtraction()
// //we can create multiple objects for the same class

// //static and non static method

// class examplestatic{
//     static  a = 10;
//     b= 20;
//     methodone(){
//         console.log("this is methodone");
//         console.log("this is a non-static method")
//     }
//     static methodtwo(){
//         console.log("this is methodtwo");
//         console.log("this is a static method")
//     }
// }
// const obj = new examplestatic()
// console.log (obj.a)// you will get undefined if accessed static variable using object
// console.log(examplestatic.a)//static variable must be accessed using the classname only
// console.log(obj.b)//non static variable accessed using object
// obj.methodone()
// //obj.methodtwo()//obj.methodtwo is not a function-static methid when accessed using a object
// examplestatic.methodtwo()//static method must be accessed using classname only..no need to create object 
// //examplestatic.methodone()// examplestatic.methodone is not a function..non-static function cannot be accessed using classname..
// //it can only be accessed using object 


// //Static variable is called using this keyword.



//     class Example {
//       static staticVariable = 'GeeksforGeeks';
//      //static variable defined
//      static staticMethod() {
//        return 'staticVariable : '+this.staticVariable;
//         }
//     }
//     // static method called
//     console.log(Example.staticMethod());


// //Encapsulation in Javascript:The JavaScript Encapsulation is a process of binding the data (i.e. variables)
// // with the functions acting on that data. It allows us to control the data and validate it.
// class workers{
//     details(wname,wplace,wdeptname)
//     {
//         this.workername = wname;//assigning to this class variable
//         this.workerplace = wplace;
//         this.workerdeptname = wdeptname;

//     }
//     displayDetails()
//     {
//         console.log("the name of the worker is: "+this.workername)
//         console.log("the place of the worker is: "+this.workerplace)
//         console.log("the department name of the worker is: "+this.workerdeptname)

//     }

// }
// const objworker = new workers()//creating object
// objworker.details("Raju","Tumkur","L&D")//calling the first method and passing the arguments
// objworker.displayDetails()//without calling first method and only calling second method
// //it prints undefined for all the values 
// class workers{
//     constructor(wname,wplace,wdeptname)
//     {
//         this.workername = wname;//assigning to this class variable
//         this.workerplace = wplace;
//         this.workerdeptname = wdeptname;

//     }
//     displayDetails()
//     {
//         console.log("the name of the worker is: "+this.workername)
//         console.log("the place of the worker is: "+this.workerplace)
//         console.log("the department name of the worker is: "+this.workerdeptname)

//     }

// }
// const objworker = new workers("Raju","Tumkur","L&D")//creating object and sending parameters to constructor

// objworker.displayDetails()


// //inheritance in Javascript

// class A 
// {
// a = 100;
// display()
// {
//     console.log(this.a)
// }
// messageOfClassA()
// {
//     console.log("Parent Class message")
// }
// }
// class B extends A
// {
//     b = 200;
//  show()
//     {
//         console.log(this.b)
//     }
//     messageOfClassB()
//     {
//         console.log("Parent Class message")
//     }
// }

// const bobj = new B();
// bobj.display()//calling function in parent class
// bobj.show()
// bobj.messageOfClassA()//calling function in parent class
// bobj.messageOfClassB()


//Polymorphism
// //Method overriding
// //Method overloading

// class A{
//     display(a,b){
//         console.log(a)
//         console.log(b)
//         console.log("result :"+(a+b));
//     }
//     message()
//     {
//         console.log("Parent Class message")

//     }
// }

// class B extends A{
//     display(a,b,c){
//         console.log(a)
//         console.log(b)
//         console.log(c)
//         console.log("result :"+(a+b+c));
//     }
//     message()
//     {
//         console.log("Child Class message")

//     }
// }

// // example for method overriding
// const objchild = new B()
// objchild.message()//child class function is executed over parent class function

// // //example for method overloading
// const objparent = new A()
// objparent.display(3,5,7)//the method gets overloaded..it will ignore overloaded(i,e 7 here) parameters


// function Student() {
//     this.name = 'John';
//     this.gender = 'Male';
// }

// var studObj1 = new Student();
// studObj1.age = 15;//age property is attached to studObj1 instance
// console.log(studObj1.age); // 15

// var studObj2 = new Student();
// console.log(studObj2.age); // undefined because age property is only defined for studobj1 not studobj2



// function Studentdetails() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// Studentdetails.prototype.age = 15;

// var studObj1 = new Studentdetails();
// console.log(studObj1.age); // 15

// var studObj2 = new Studentdetails();
// console.log(studObj2.age); // 15//property is shared among all instances


// class employee{
//     details(empname,empnum,empdept){
//         this.empname = empname;
//         this.empnum = empnum;
//         this.empdept = empdept;

//     }
//     displayDetails(){
//         console.log(this.empname,this.empnum,this.empdept)
//     }
// }
// emp1 = new employee()
// emp1.details("Raju",418,"L&D")
// emp1.displayDetails()

// class employee{
//     details(empname,empnum,empdept){
//         this.empname = empname;
//         this.empnum = empnum;
//         this.empdept = empdept;

//     }
//     displayDetails(){
//         console.log(this.empname,this.empnum,this.empdept)
//     }
// }
// employee.prototype.org = "DBSQA"//prototype variable..classname.prototype.variable
// emp1 = new employee()
// emp1.details("Raju",418,"L&D")
// //emp1.displayDetails()
// console.log(emp1.empname, emp1.empnum,emp1.empdept,emp1.org)
// emp2 = new employee()
// emp2.details("Rani",419,"L&D")
// //emp1.displayDetails()
// console.log(emp2.empname, emp2.empnum,emp2.empdept,emp2.org)//org will be available for all the instances or objects created for the class employee


// class employee{
//     details(empname,empnum,empdept){
//         this.empname = empname;
//         this.empnum = empnum;
//         this.empdept = empdept;

//     }
//     displayDetails(){
//         console.log("printing variables inside the class ")
//         console.log(this.empname,this.empnum,this.empdept)
//     }
// }
// employee.prototype.org = "DBSQA"//prototype variable..classname.prototype.variable
// employee.prototype.display = function()
// {
//     console.log("printing variables defined using prototype variable in prototype function ")
//     console.log(this.empname,this.empnum,this.empdept,this.org)
// }
// emp1 = new employee()
// emp1.details("Raju",418,"L&D")
// emp1.displayDetails()
// emp1.display()
// emp2 = new employee()
// emp2.details("Rani",419,"L&D")
// emp2.displayDetails()
// emp2.display()

