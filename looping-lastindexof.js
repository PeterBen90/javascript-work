//LastIndexOf Exercise
function lastIndexOf(array, value) {
  var match = false;
  var someArray = i;
  for (var i = (array.length - 1); i > -1; i--) {
    if (value === array[i]) {
      match = true;
      someArray = i;
      break;
    }
  }
  if (match) {
    return someArray;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);