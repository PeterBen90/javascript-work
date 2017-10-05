//Looping Range Exercise
function range(start, end, step) {
  var someArray = [];
  if (start === undefined || end === undefined || step === undefined || end  < start || step < 0) {
    someArray = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      someArray.push(i);
    }
  }
  return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));