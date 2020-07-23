var firstName = "Sahar";
var lastName = "Soheilian";
var dateOfBirth = "1988-01-08";
var age = 32;
var profileImgUrl = "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

//javascript is smart in converting numbers into string!!
var loginMessage = "Welcom, " + firstName + ". Happy " + age + "rd birthday!";

//alert(message); 
//show message in chrome developers tool(inspector) accessed by command+alt+j
console.log(loginMessage);

//math operations in js
var sum = age + 10;
var multi = 10 * 3;

console.log(multi);

//comparision: == , <= , >= , ===  , !==
//logical: && , ||
var myAccountBalance = 300;
var nikeShoes = 79.59;


if (myAccountBalance >= nikeShoes){
    myAccountBalance -= nikeShoes; //refreshing account balance
    console.log("Congrat on your new shoes!");
    console.log("Your current balance is: " + myAccountBalance);
}else {
    console.log("Sorry, you can't buy new shoes!");
}

/* for comparision different types*/
var val1 = 32;
var val2 = "32";

if (val1 === val2 && "Sahar" === "Sahar")
    console.log("These are the same!");
else 
    console.log("These are different. They have different types!!");


//arrays
var studentsName = ["Sahar","Saeid","Ali","Samane","Zahra"];    
console.log(studentsName);

var naughtyList = [];
naughtyList.push(studentsName[0]);

var index = naughtyList.indexOf("Sahar"); //returns -1 if couldn't find the item

if (index > -1){
    naughtyList.splice(index,1); //removes 1 element
}

console.log(naughtyList);


//loops
for (var index = 0; index < studentsName.length; index += 2) {
    console.log(studentsName[index]);
}

//function
//! function is an object in js
function area(length, width) {
    return length * width;
}

var rectanglesArea = [];
rectanglesArea.push(area(15, 10));
rectanglesArea.push(area(14, 2));

console.log(rectanglesArea);

// functions can work with variables defined out of function's scope
var bankBalance = 400;

function makeTransaction(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase successful:)");
    } else{
        console.log("Insufficient funds:(");
    }
}

makeTransaction(40.35);
makeTransaction(160.5);
makeTransaction(10.00);
makeTransaction(390.99);


//when you want to store all the operations in an array, you can define the function like below:
var transaction = function(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase successful:)");
    } else{
        console.log("Insufficient funds:(");
    }
};

transaction(200);

var printCustomerName = function(firstName, lastName){
    console.log("First Name: " + firstName + " Last Name: " + lastName);
}

var applyForCreditCard = function(creditScore){
    //call some operations and functions
}

//store all the functions in an array
var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);


//Objects
//array: [] - object: {}
//Object: collection of named values. Group relevant things. An object consist of different properties (key: value)

var student0 = {
    firstName : "Sahar",
    lastName : "Soheilian",
    age : 32,
    greeting : function (){
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."; //"this" refers to a property inside of an object
    }
};

console.log(student0.lastName);
console.log(student0["lastName"]);//not recognized in all browsers
console.log(student0.greeting());

var student1 = new Object();//new: creates a new empty object
student1.firstName = "Ayeen";
student1.lastName = "Hakimi";
student1.age = 3.5;

var student2 = {};
student2.firstName = "Shima";
student2.lastName = "Mirshahzade";
student2.age = 31;

//arrays of objects:
var students = [];
students.push(student0);
// students.push(student1);
// students.push(student2);

for (var index = 0; index < students.length; index++) {
    console.log(students[index]);
}

//Object Constructor: define REUSABLE objects: use "function" to declare an object which can be resued easily.
function StudentObj(first, last, age){
    this.firstName = first;
    this.lastName  = last;
    this.age = age;
    this.greeting = function (){
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."; //"this" refers to a property inside of an object
    };
}

var student3 = new StudentObj("Sima", "Sama", 18);
console.log(student3);
//console.log(s1.greeting());

students.push(student3);
students.push(new StudentObj("Mahsa", "Movahed", 36));
students.push(new StudentObj("Hamid", "Mirkhani", 40));

for (var index = 0; index < students.length; index++) {
    var st1 = students[index];
    console.log(st1.greeting());
}

//for in
//grab different key values in an object
//not common not recommended
var st2 = students[0];
for (var key in st2){
    console.log(st2[key]);
}


//bind()
/*When passing object methods as callbacks, there’s a known problem: "losing this".
Once a method is passed somewhere separately from the object – this is lost.
Bind creates a new function that will force the "this" inside the function to be the parameter passed to bind().
*/

this.car = "Nissan";

var myCar = {
    car : "Hyundai",
    getCar : function(){
        return this.car;
    }
};

console.log(myCar.getCar());//this refers to object scope

var storeGerCar = myCar.getCar;//this refers to current scope (main script)
console.log(storeGerCar());

//use bind() to fix it 
var realStoreGetCar = myCar.getCar.bind(myCar);// we should pass the object that we want to retain to the bind()- 
//bind(this) refers to main scrip scope

console.log(realStoreGetCar());





