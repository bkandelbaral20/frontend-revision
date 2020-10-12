
"use strict";
//-------user interation
// console.log('Hello from JavaScript!');
// alert("what is your name");
//
// var confirmed = confirm("Are you sure, you want to exit it ")
// console.log(confirmed);
//
// var userInput = prompt("please type something");
// console.log("you typed" + userInput);

//--increment
// function increment(x) {
//     return x + 1;
// }
//
// var four = increment(3);
// alert(four);
// var six = increment(increment(increment(3)));
// alert(six);

//increment
// function increment(someNumber) {
//     return someNumber + 1;
//     console.log('you will never see this.');
//     return someNumber + 2; // This will never run
// }
// alert(increment(3));

//if statement
var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}


