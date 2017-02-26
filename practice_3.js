/*function expression*/
var greetMe = function(){
  console.log('Hi Tony!');
};
greetMe();

/*arrow*/
greetSam = () => console.log('Hi Sam!');
greetSam();

/*arrow with parameters*/
greetYou = name => console.log('Hi ' + name + '!');
greetYou('NTUE');

/*review template string*/
greet = name2 => console.log(`Hi ${name2}!`);
greet('Jack');

var square1 = function(num){return num*num};
var square2 = num => {return num*num};
var square3 = num => num*num;

/*test*/
console.log(square1(3));
console.log(square2(3));
console.log(square3(3));
