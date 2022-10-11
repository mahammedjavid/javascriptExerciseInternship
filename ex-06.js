// 1

var a = 12;
(function() {
 console.log(a);  //12
})();

// 2

var a = 5;
(function() {
 var a = 12;
 console.log(a); //12
})();

//3

var a = 10;
var x = (function() {
 var a = 12;
 return (function() {
   console.log(a);
 });
})();// no output
x() //12

//4

var a = 10;
var x = (function() {
 var y = function() {
   var a = 12;  //'var' cant be accesses outside blockScope
 };
 return function() {
   console.log(a);
 }
})(); 
x(); //10

//5

var a = 10;
var x = (function() {
 (function() {
   a = 12; // <<< look carefully at this line.
 })();
 return (function() {
   console.log(a);
 });
})();
x(); //12

//6

var a = 10;
(function() {
 var a = 15;
 window.x = function() {
   console.log(a);
 }
})();
x();






