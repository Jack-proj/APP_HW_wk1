var addclosure = (() => {
  var counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  }
})();

addclosure();
addclosure();
addclosure();

/**************************/

var add = (x) =>{
  return (y) => {
    console.log(x+y);
  };
};

var add5 = add(5);
/*return 5+y*/
add5(3);
