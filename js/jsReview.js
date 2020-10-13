
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
// var pizzaPreference = prompt("What kind of pizza do you like?");

// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


//objects

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//        alert('All done');
//     } else {
//         count++;
//         alert('Repeating this line ' + count);
//     }
// }, interval);
//


// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
//     // clearTimeout(timeoutId);
// }, delay);

const button1 = document.getElementById('btn1');

 const listener = function (e) {
    alert('You clicked the button!');
}

// register the listener to handle clicks on btn1
button1.addEventListener('dblclick', listener);


