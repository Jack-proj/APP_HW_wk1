
/*Scope Chain*/
/*first try*/
function b1(){
  var myVar;
  console.log(myVar);//4th,undefined
}

function a1(){
  var myVar = 1;
  b1();              //3rd,into b1
  console.log(myVar);//5th,1
}

var myVar = 2;
console.log(myVar); // 1st,2
a1();               // 2nd,into a1


/*second try*/
function b1(){
  //var myVar;
  console.log(myVar);//4th,Scope Chain,2
}

function a1(){
  var myVar = 1;
  b1();              //3rd,into b1
  console.log(myVar);//5th,1
}

var myVar = 2;
console.log(myVar); // 1st,2
a1();               // 2nd,into a1


/*third try*/

function a1(){
  var myVar = 1;
  function b1(){
  	//var myVar;
  	console.log(myVar);//4th,Scope Chain,1
	}
  b1();              //3rd,into b1
  console.log(myVar);//5th,1
}

var myVar = 2;
console.log(myVar); // 1st,2
a1();               // 2nd,into a1

/**********************************************/
/*Viriable Hoisting*/
/*Simon Holmes*/
var firstname = 'Simon';
var addSurname = () =>{
  var surname = 'Holmes';
  var fullname = `${firstname} ${surname}`;
  console.log(fullname);
}
addSurname();

/*undefined Holmes*/
var firstname = 'Simon';
var addSurname = () =>{
  //var firstname;
  var surname = 'Holmes';
  var fullname = `${firstname} ${surname}`;
  var firstname = 'David';
  console.log(fullname);
}
addSurname();
