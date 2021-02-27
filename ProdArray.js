// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const prodOfNums = (nums)=> {

  let result = [];
  let prodLeft = {};
  let prodRight = {};

  prodLeft[-1] = 1
  prodRight[nums.length] = 1
  //store (k, v)dictionary of index and prod of everything to left and dictionary of index and prod of everything to right
  for(let i = 0; i < nums.length - 1; i++) {
    prodLeft[i] = nums[i] * prodLeft[i - 1]
  }
  for(let j = nums.length - 1; j > 0; j--) {
    prodRight[j] = nums[j] * prodRight[j + 1]
  }

  for (let k = 0; k < nums.length; k++) {
    result.push(prodLeft[k - 1] * prodRight[k + 1])
  }
  return result;
  // iterate over nums and multiple prod left * prod right and push to result array
}

console.log(prodOfNums([1,2,3,4,5]))