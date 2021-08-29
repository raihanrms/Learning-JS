/* Followed freeCodeCamp's Javascript Tutorial */
/* YT Link: https://www.youtube.com/watch?v=PkZNo7MFNFg */
/* Coded on Scrimba: https://scrimba.com/c/c4MkDds9 */

/* Note: All the console.log() has been commented out to keep everything together. */

/* Comments */
// in-line comment for declaring variable
/* This is multiline comment */

/* Data types: undefined, null, boolean, string, symbol, number,
and object */

/*  Declaring variables */
// Note: There are three ways to declare variables
var myName = "Raihan"; // can be used through out the whole program
let ourName = "Scrimba"; // only be used in scope where it is declared
const pi = 3.14; // a variable that will never change

/* Storing values with assignment operators */
var a;          // declaring a variable
var b = 2;      // assigning and declaring a variable, = is the assign variable
a = 7;
b = a;
// c = 1; 

// console.log(a) // allows you to see things in the console

/* Initializing variables w/ assignment operator */
var a = 9;

/* Uninitialiazed variables */
var a;
var b;
var c;

/* Case sensitivity in variables */
// Note: Capitalization matters in variables

// Declarations
var studyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* Adding numbers */
var sum = 10 + 10;
//console.log(sum)

/* Subtracting numbers */
var diff = 45 - 10;
//console.log(diff)

/* Multipying numbers */
var multiply = 8 * 2;
//console.log(multiply)

/* Dividing numbers */
var divide = 63 / 7;
//console.log(divide)

/* Increment a number */
var myVarInc = 87;
myVarInc = myVarInc + 1; // increment
myVarInc++; // quicker increment
//console.log(myVarInc)

/* Decrement a number */
var myVarDec = 87;
myVarDec = myVarDec + 1; // decrement
myVarDec--; // quicker decrement
//console.log(myVarDec)

/* floats or decimals */
var ourDeci = 5.7;
var myDeci = 0.4;

var mulDeci = ourDeci * myDeci;     // multiply decimal numbers
var divDeci = ourDeci / myDeci;     // divide decimal numbers
//console.log("Success")
//console.log(mulDeci)
//console.log(divDeci)

/* Finding a remainder */
var remainder;
remainder = 11 % 3;
//console.log(remainder)

/* Compound assignment with augmented addition and subtraction */
var a1 = 30;
var b1 = 15;
var c1 = 12;

/* plus equals (+=) operator */
//console.log("Plus")
a1 += 12;
b1 += 9;
c1 += 7;
//console.log(a1, b1, c1)

/* minus equals (-=) operator */
//console.log("Minus")
a1 -= 10;
b1 -= 15;
c1 -= 2;
//console.log(a1, b1, c1)

/* times equals (*=) operator */
//console.log("Multiply")
a1 *= 10;
b1 *= 15;
c1 *= 2;
//console.log(a1, b1, c1)

/* divide equals (/=) operator */
//console.log("Divide")
a1 /= 10;
b1 /= 15;
c1 /= 2;
//console.log(a1, b1, c1)

/* Escaping from string qoutes */
// Note: Use single qoutes for strings to escape qoute problems
var myString1 = '<a href="https://facebook.com" target="_blank">Link</a>';
//console.log(myString1)

// Note: And tacks to use single and double qoutes together
var myString2 = `'<a href="https://facebook.com" target="_blank">Link</a>'`;
//console.log(myString2)

/******
 * Escape sequences in Strings *
CODE    OUTPUT
\'      single qoute
\""     double qoute
\\      backslash
\n      new line
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*******/

// Note: Use bracket notion [index(starts at 0)] the indexing stuff

// 01883648337

/* Fill in the blanks with functions */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}
//console.log(wordBlanks("dog", "big", "ran", "quickly"));
//console.log(wordBlanks("bike", "slow", "flew", "slowly"));

/* Arrays */
var ourArray1 = ["Raihan", 23];
var myArray1 = ["Munim", 1];

/* Nested array or 2D array  */
var ourArray2 = [["the universe", 42], ["everything", 101010011]];

/* Access array data with indexes */
var ourArray3 = [50,60,70];
var ourData3 = ourArray3[0]; // equals 50

var myArray4 = [60,70,30];
var myData4 = myArray4[1];
//console.log(myData4)

/* Modify arrays with index */
// Note: We can modify arrays with [], but not strings
var ourArray5 = [18,64,99];
ourArray5[1] = 45; // result will be [18,45,99]
//console.log(ourArray5)

/* Modify multidimensional array */
var myArray6 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData6 = myArray6[2][1];
//console.log(myData6)

/* Manipulate arrays with push() fuction */
var ourArray7 = ["TukTuk", "R", "cat"];
// Note: push() fuction adds the element at the end of the array
ourArray7.push(["happy", "joy"]);
//console.log(ourArray7)

/* Manupilate arrays with pop() function */
var ourArray8 = [1,2,3];
var removedFromOurArray8 = ourArray8.pop(); // removes the last element
//console.log(ourArray8)
//console.log(removedFromOurArray8)

/* Manupilate arrays with shift() function */
var ourArray9 = ["TukTuk", "J", ["cat"]];
var removedFromOurArray9 = ourArray9.shift(); // removes the first element
//console.log(ourArray9)
//console.log(removedFromOurArray9)

/* Manupilate arrays with unshift() function */
var ourArray10 = ["TukTuk", "F", "cat"];
ourArray10.shift(); // array is ["F", "cat"]
// Note: unshift() fuction adds the element at the begining of the array
ourArray10.unshift("happy");
//console.log(ourArray10)

/* Nested arrays in shopping list */
var myShoppingList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]; // array of arrays

/* Reusable code with functions */


function myReusableFunction(){
    console.log("Heyya World");
}
//myReusableFunction(); // calling a function

/* Passing values to functions with arguments/parameters */
function myFunctionWithArgs(a, b){
    console.log(a - b);
}
//myFunctionWithArgs(10, 5); // output will be 5

/* Global Scope and Functions */
// Note: Scope refers to the visiblity of the variables
// Note: Variables which are defined outside of a function block have golbal scope
// Note: Global scope means that they can be seen through the whole code
var myGlobal = 10; // its in global scope
function fun1(){
    // Note: Can be set without var, since within a function scoped with the function, since var is not included it is set as global scope, wont work in scrimba, but will work in browsers
    oopsGlobal = 5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
//fun1();
//fun2();

/* Local Scope and Functions */
// Note: Variable which are declared within a function as well as the function parameters have a local scope, that means that they are only visible within the function
function myLocalScope(){
    var myVarLocal = 5;
    console.log(myVarLocal); // will show 5
}
//myLocalScope();
//console.log(myVarLocal); // will show error, because it tried accessing myVarLocal from outside the function

/* Global vs Local Scope in Function */
// Note: It is possible to have both Global and local with the same name
var outerWear = "T-Shirt"; // global variable

function myOutFit(){
    var outerWear = "Sweater"; // local variable will take presitence

    return outerWear;
}
//console.log(myOutFit()); // will return local variable
//console.log(outerWear); // will return global variable

/* Return values from functions with Return statement */
function minusSeven(num){
    return num - 7;
}
//console.log(minusSeven(10));

function multiplyByFive(num){
    return num * 5;
}
//console.log(multiplyByFive(5));

/* Undefined Value returned from a Function */
var sum = 0;
function addFive(){
    sum += 5;
}
//console.log(); // will not return anything

/* Assignment with a Returned Value */
var changed = 0;

function change(num){
    return (num + 5) / 3;
}
changed = change(10);

// YT time(1:06:01)
/* Stand in Line (Queue) */
function nextInLine(arr, item){
    arr.push(item); // add item at the end
    return arr.shift(); // removed the first item
}
var testArr = [1,2,3,4,5];

//console.log("Before: " + JSON.stringify(testArr));
//console.log(nextInLine(testArr, 6))
//console.log("After: " + JSON.stringify(testArr));

/* Boolean Values */
function Booleans(){
    return false;
}

/* Conditional Logic with IF Statements */
function TrueORFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}
//console.log (TrueORFalse(true));

/* Comparison with Equality Operator (==) */
// Note: Equality operator returns true or false by comparing them to a common TYPE
function testEqual(val){
    if (val == 12){
        return "Equal";
    }
    return "Not Equal";
}
//console.log(testEqual(10));

/* Comparison with Strict Equality Operator (===) */
// Note: Strict Equal operator does not do TYPE conversion
function testStrictEqual(val){
    if (val === 7){
        return "Equal";
    }
    return "Not Equal";
}
//console.log(testStrictEqual(7));

/* Practice: Comparing Different Values */
function compareEquality(a, b){
    if (a === b){ // change the operator to equality operator to see diff result
        return "Equal";
    }
    return "Not Equal";
}
//console.log(compareEquality(10, "10"));

/* Comparison with Inequality Operator (!=) */
// Note: Inequality Operator does TYPE conversion
function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}
//console.log(testNotEqual(10));

/* Comparision with Strict Inequality Operator */
// Note: Strict Inequality Operator doen not do TYPE conversions
function testStrictNotEqual(val){
    if (val !== 17){
        return "Not Equal";
    }
    return "Equal";
}
//console.log(testStrictNotEqual(10));

/* Comparisons with the Greater Than Operator (>) */
function testGreaterThan(val){
    if (val > 100){
        return "Over 100";
    }
    if (val > 10){
        return "Over 10";
    }
    return "10 or Under";
}
//console.log(testGreaterThan(10));

/* Comparisons with the Greater Than Or Equal To Operator (>=) */
function testGreaterOrEqual(val){
    if (val >= 20){
        return "20 or Over";
    }
    if (val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}
//console.log(testGreaterOrEqual(10));

/* Comparisons with the Less Than Operator (<) */
function testLessThan(val){
    if (val < 23){
        return "Under 25";
    }
    if (val < 55){
        return "Under 55";
    }
    return "55 or Over";
}
//console.log(testLessThan(10));

/* Comparisons with the Less Than Or Equal To Operator (<=) */
function testLessOrEqual(val){
    if (val <= 12){
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24){
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
//console.log(testLessOrEqual(10));

/* Comparison with the Logical AND Operator (&&) */
function testLogicalAND(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}
//console.log(testLogicalAND(10));

/* Comparison with the Logical OR Operator (||) */
function testLogicalOR(val){
    if (val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}
//console.log(testLogicalOR(15));

/* Else Statements */
function testElse(val){
    var result = "";
    if (val > 5){
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
//console.log(testElse(4));

/* Else If Statements */
function testElseIf(val){
    if (val > 10){
        return "Greater than 10";
    } else if (val < 5){
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
//console.log(testElseIf(7));

// YT Time: 1:23:31

/* Logical order in IF ELSE Statements */
// Note: Order is important in IF ELSE statements
function orderMyLogic(val){
    if (val < 5){
        return "Less than 5";
    } else if (val < 10){
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
//console.log(orderMyLogic(3));

/* Chaining IF ELSE Statements */
function testSize(num){
    if (num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    } else if (num < 20){
        return "Large";
    } else {
        return "Huge";
    }
}
//console.log(testSize(19));

/* Golf Code */
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes == par - 1){
        return names[2]
    } else if (strokes == par){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes >= par + 3){
        return names[6]
    }
}
//console.log(golfScore(5, 2));

/* SWITCH Statements */
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}
//console.log(caseInSwitch(1));

/* Default options in Switch Statements */
function switchOfStuff(val){
    var answer = "";
    switch (val){
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bird";
            break;
        case "c":
            answer = "Cat";
            break;
        case "d":
            answer = "Dog";
            break;
        default:
            answer = "Stuff";
    }
    return answer;
}
//console.log(switchOfStuff(2));

/* Multiple Identical Options in Switch Statements */
function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
//console.log(sequentialSizes(5));

/* Replacing IF ELSE Chains with SWITCH */
function chainToSwitch(val){
    var answer = "";
    switch(val){
        case "Bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much? xd";
            break;
        case 7:
            answer = "Seven Ate Nine";
            break;
    }
    return answer;
}
//console.log(chainToSwitch(7));

/* Return Boolean Values from functions */
function isLess(a, b){
    return a < b;
}
//console.log(isLess(10, 15));

/* Return Early Pattern from Functions */
function abTest(a, b){
    if (a < 0 || b < 0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
//console.log(abTest(-2, 2));

/* Counting Cards */
var count = 0; // Global variable
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdBet = "Hold";
    if (count > 0){
        holdBet = "Bet";
    }
     return count + " " + holdBet;
}
//cc(2); cc('K'); cc(10); cc('K'); cc('A');
//console.log(cc(4));

/* uild JavaScript Objects */
// Note: Objects are similar to arrays except of using indexes  to accwss data, we use properties
var myCat = {
    "name": "Tuktuk",
    "legs": 4,
    "tails": 1,
    "friends": ["sach yo mouth!"]
};

/* Accessing Object Properties with Dot Notation */
var testObj1 = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj1.hat;
var shirtValue = testObj1.shirt;
//console.log(shirtValue);

/* Accessing Object Properties with Bracket Notation */
var testObj2 = {
    "an entree": "cheese burger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj2["an entree"];
var drinkValue = testObj2['the drink'];
//console.log(entreeValue);

/* Accessing Object Properties with Variables */
var testObj3 = {
    12: "Namatha",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;
var player = testObj3[playerNumber];
//console.log(player);

/* Updating Object Properties */
var myCat = {
    "name": "Tuktuk",
    "legs": 4,
    "tails": 1,
    "friends": ["sach yo mouth!"]
};
myCat.name = "Fierce Tuktuk";
//console.log(myCat.name)

// YT Time: 1:54:40
/* Add new Properties to an Object */
var myDog = {
    "name": "Happy Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["Kalbagan's Residence"]
};
myDog['bark'] = "woof-woof"
//console.log(myDog.bark)

/* Delete Properties Fro an Object */
var myDog = {
    "name": "Happy Tommy",
    "legs": 4,
    "tails": 1,
    "friends": ["Kalbagan's Residence"],
    "bark": "woof-woof"
};
delete myDog.bark;
//console.log(myDog.bark);

/* Using Objects for Lookups */
function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
//console.log(phoneticLookup("foxtrot"));

/* Testing Objects for Properties */
var myObj1 = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh"
};
function checkObj(checkProp){
    if (myObj1.hasOwnProperty(checkProp)){
        return myObj1[checkProp]; // Backet Notation
    } else {
        return "Not Found";
    }
}
//console.log(checkObj("hello"));

/* Manupilating Complex Objects */
// Note: A javascript object is a way to store flexible data
var myMusic = [
    {
        "artist": "Dino Merlin",
        "title": "Undo",
        "release_year": "Unknown",
        "formats": ["CD", "8T", "LP"],
        "gold": true
    },
    {
        "artist": "Baeu Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": ["YouTube Video"]
    }
];

/* Accessing Nested Objects */
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
//console.log(gloveBoxContents)

/* Accessing Nested Arrays */
var myPlants = [
    {
        type: "flowers",
        lists: ["rose", "tulip", "dandelion"]
    },
    {
        type: "trees",
        lists: ["fir", "pine", "birch"]
    }
];
var secondTree = myPlants[1].lists[1];
//console.log(secondTree)

/* Record Collection */
var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it Rock", "You Give Love a Bad Name"]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little Red Corvette"]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// To keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
//console.log(updateRecords(5439, "artist", "ABBA"));

// YT Time: 2:10:17
/* Iterate with WHILE Loops */
var myArray7 = [];
var i = 0;
while (i < 5){
    myArray7.push(i);
    i++;
}
//console.log(myArray7);

/* Iterate with FOR Loops */
var myArray8 = [];
var myArray9 = [];
for (var i = 1; i < 6; i++){
    myArray8.push(i);
}
//console.log(myArray8)

/* Iterante even numbers with FOR loops */
var myArray9 = [];
for (var i = 0; i < 10; i += 2){
    myArray9.push(i);
}
//console.log(myArray9)

/* Count backwards with FOR loop */
var myArray10 = [];
for (var i = 9; i > 0; i -= 2){
    myArray10.push(i);
}
//console.log(myArray10);

/* Array and FOR Loops */
var myArray11 = [9, 10, 11, 12];
var myTotal = 0;
for (var i = 0; i < myArray11.length; i++){
    myTotal += myArray11[i];
}
//console.log(myTotal);

/* Nested FOR Loops */
function multiplyAll(arr){
    var product = 1;
    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
//console.log(product);

/* Iterate with DO WhILE Loops */
var myArray12 = [];
var i = 10;
do {
    myArray12.push(i);
    i++;
    } while (i < 5)
//console.log(i, myArray12);

/* Profile Lookup */
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0542326543",
        "likes": ["Pizza","Coding","Brownie Points"]
    },
    {
        "firstName": "Raihan",
        "lastName": "Munim",
        "number": "0994382684",
        "likes": ["Quirks","Computers","Cats"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriging Class","Violin"]
    },
    {
        "firstName": "Kristine",
        "lastName": "Voes",
        "number": "unkown",
        "likes": ["JavaScript","Gaming","Foxes"]
    }
];
function lookUpProfile(name, prop){
    for (var i=0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop]|| "NO Such Property";
        }
    }
    return "NO Such Contact";
}
var data = lookUpProfile("Sherlock","Likes");
//console.log(data);

/* Generate Random Fractions */
function randomFraction(){
    return Math.random();
}
//console.log(randomFraction());

/* Generate Random Whole Numbers */
var randomNumber0to19 = Math.floor(Math.random() * 20);
function randomWholeNum(){

    return Math.floor(Math.random() * 10);
}
//console.log(randomWholeNum());

/* Random whole numbers with a Range */
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
//console.log(ourRandomRange(1, 9));
// 2nd example
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);
//console.log(myRandom);

/* parseInt Function */
// Note: Takes in a String and returns a Integer
function convert2Integer(str){
    return parseInt(str);
}
//convert2Integer("56");

/* parseInt Function with a Radix */
function convert2IntegerWithRadix(str){
    return parseInt(str, 2); // passing it as a base 2
}
//console.log(convert2IntegerWithRadix("10011"));

/* Conditional (Ternary) Operator */
// condition ? statement-if-true : statement-if-false;
function checkEqualTernary(a, b){
    return a === b ? true : false; // same as return a === b;
}
//console.log(checkEqualTernary(1, 2));

// YT time 2:33:43

/* Multiple Conditional (Ternary) Operator */
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
//console.log(checkSign(0));

/* Differences between the VAR and LET keyword */
// Note: VAR allows you to declare a variable twice in a same scope, LET does not allow that
// Tip: Using "use strict" in a function to catch coding mistakes, such as if a variable created but not declared with VAR, CONST or LET
/*
let catName = "Tuktuk";
let qoute;
let catName = "Mishu"; // the let keyword will give error in the program
function catTalk(){
    "use strict"; // to catch coding mistakes
    catName = "Pushpush";
    qoute = catName + " says Meaww!";
}
//console.log(catTalk());
*/

/* Comparing scopes with VAR and LET */
// Note: When a variable is declared with a VAR, its declared globally. If it's inside a function, it gets declared locally
// Note: However the scope of LET is limited to the Block, Statement or Expression it was declared in
function checkScope(){
    "use strict";
        let i = "function scope";
        if (true){
           let i = "block scope";
         //   console.log("Block Scope i is: ", i);
        }
        //console.log("Function Scope i is: ", i);
        return i;
}
//checkScope();

/* Declaring Read-Only Variable with CONST keyword */
// Tip: When using const, name the variables to ALL CAPS
function printManyTimes(str){
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2){
        console.log(SENTENCE);
    }
}
printManyTimes("Raihan");
