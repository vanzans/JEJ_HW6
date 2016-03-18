// // Using COMMENTS is a good way to explain what you are
// // working on and leave notes for yourself or others
// // they are also helpful when DEBUGGING

// // VARIABLES are nameable, changeable JS elements
// // they act as containers for an incoming value

// // you can TEST JS code by (1) showing your results in
// // the console:

// var num1 = 100;
// var num2 = 200;
// var result = num1 + num2;
// console.log(result);


// // or (2) by using an alert

// var firstName = "Johnny_"
// var lastName = "TwoShoes"
// var result = firstName + lastName;
// alert(result);

// // or (3) by logging to the HTML

// function switcheroo(){
// document.getElementById("bowie").innerHTML = "CHANGES!"
// }

// // see jsbasics.html for DATA TYPES

// // ARRAYS are collections of data types:
// // ["Persons, Places, Things"]
// // ["5, 10, 50, 2500"]
// // ["2, 4, 6, 8, who, do, we, appreciate"]

// // ARRAYS can also be stored in variables:
// // var dogNames = ["spot, fido, smalltalk"]

// // LOGIC is the control flow of the program.
// // It's also a river, apparently.


// // TESTING("1, 2, 3")
// // *hint: for strings use 3 = signs for testing equality,
// // use !== for inequality
// // <, >, <=, >= are also valid comparison operators

// // Simple Math Ex:
// // 5 = 5
// // true

// // 5 = 5
// // false

// // "banana" === "bananas"
// // false


// // TESTING with if, else

// if(10>20){
// 	alert("Your Basic Math Skills Need Immediate Attention!")
// }

// if (10<20){
// 	alert("Your Basic Math Skills Are Very Handsome Indeed!")
// }


// if(10>20){
// 	console.log("Your Basic Math Skills Are Very Handsome Indeed!")
// } else {
// 	console.log("Your Basic Math Skills Need Immediate Attention!")
// }


// Basic JavaScript

// 1. Add to the JavaScript "cheat sheet" file from the previous assignment so that it contains working examples (with comments) of functions.

// 2. Write 3 different functions that take input and return something via the console or an alert.

// FUNCTIONS, Ok

    // function sayHello(name) {
    //   return alert("hello " + name);
    // } 

    // sayHello("john");




    // function noCussing(word)	{
    // 	if(word === "shit"){
    // 		return alert("NO CUSSING!")
    // 	} else if(word === "feck"){
    // 		return alert("NO CUSSING OK!")
    // 	} else{
    // 		return alert("GOOD GOIN' KID!")
    // 	}
    // }


    // noCussing("shit");
    // noCussing("feck");
    // noCussing("kiwi");



    // function openDoor(door) {
    //   if (door === 1) {
    //     return alert("you win a T-shirt!");
    //   } else if (door === 2) {
    //     return alert("you win a New Prius!");
    //   } else if (door === 3) {
    //     return alert("you win a European Vacation!");
    //   }	else {
    //     return alert("Womp. Womp. Please try again.");
    //   }
    // }

    // openDoor(1);
    // openDoor(2);
    // openDoor(3);
    // openDoor(4);





// // Basic jQuery

// // 1. Create a "cheat sheet" JavaScript
// file that contains examples of basic jQuery 
// usage, commented out to delineate what each
// snippet does.

      // $(document).ready(function(){

      //   wrapping this around your js ensures that all the elements will load before the jquery events fire

      // });


      // $("#hidden").hide(4000);
      //   grabs an element and hides it in 4 seconds

      // $("#shown").show(4000);
      //   shows the given element over four seconds


      // $("#clickEvent").click(function(){
      //   alert("congrats!!!");
      // });
      //   triggers an event upon clicking


// // 2. Create a web page with 4 different
// jQuery events. Have at least one of them be 
// initiated by a click event.


$("#appear").fadeIn(5000);

$("#disappear").fadeOut(5000);

$("#clickToEnlarge").click(function() {
  $(this).animate({
  width: "400px",
  height: "400px"}, 4000);
});

$("#clickToShrink").click(function()  {
  $(this).animate({
  width: "100px",
  height: "100px"}, 4000);
});






  







