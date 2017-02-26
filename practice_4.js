/*IIFE*/
(()=>{
  out=20;											//global
  var height=170;							//local
  if(out==20){height=180;}
  console.log(`height=${height}`);
})();
console.log(`out=${out}`);
/*console.log(`h=${height}`);*/ /*Error*/

/*********************************************/

/*use strict*/
"use strict";
function testFunction(){
  var testvar = 4;
  return testvar;
}
testvar = 5;							//syntax error
console.log(testFunction()); // 4

/*********************************************/

/* let/var scope */
var a = 5;
var b = 10;

if(a === 5) {
  let a = 4; // a's scope(let) : inside the block
  var b = 1; // b's scope(var) : inside the function

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1
