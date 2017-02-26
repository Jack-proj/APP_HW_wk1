
/*statement*/
function greet(){
  console.log('hi');
}
greet(); //invoke


/*first-class*/
function logGreeting(fn){
  fn();
};
logGreeting(greet);


/*function expression*/
var greetMe = function(){
  console.log('Hi Tony!');
};
greetMe();

logGreeting(greetMe); //first-class
