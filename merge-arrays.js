//Merge and Sort Arrays Exercise
function merge(array1, array2) {
  var array3 = array1;
  for (var i = 0; i < array2.length; i++) {
    array3.push(array2[i]);
  }
  return array3.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);