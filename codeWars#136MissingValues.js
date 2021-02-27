// You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

// For arr=[1, 1, 1, 2, 2, 3], the result should be 18
// 3 x 3 x 2 = 18
// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000
// 200 x 200 x 100 = 4000000

function missingValues(arr) {

  var x;
  var y;
  var numCounts = {};
  for (var i = 0; i < arr.length; i++) {
    if (!numCounts[arr[i]]) {
      numCounts[arr[i]] = 1;
    } else {
      numCounts[arr[i]]++;
    }
  }

  for (var num in numCounts) {
   var val = numCounts[num]
   if(val === 2) {
     y = num
   }
   if(val === 1) {
     x = num
   }
  }
  return x * x * y;
}

console.log(missingValues([1, 1, 1, 2, 2, 3]))