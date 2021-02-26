
// Recursion
// Time complexity O(2^n)
let climbStairs = (n, count = 0) => {
  //if count is greater than stairs then return 0;
  if(count > n){
      return 0;
  }

  //if it is equal to the stairs then return 1.
  if(count === n){
      return 1;
  }

  //cal the same function recursively with possible steps that can be taken.
  return climbStairs(n, count + 1) + climbStairs(n, count + 2);
};




// using dymanic programming to store already computed function values
// Time complexity reduced to O(n)
let climbStairs = (n, count = 0, memo = []) => {
  //if step is greater than stairs then return 0
  if(count > n){
      return 0;
  }

  //if step is eqaul to the stairs then return 1
  if(count === n){
      return 1;
  }

  //if the value is present for the given step then return it
  if(memo[count] > 0){
      return memo[count];
  }

  //compute the value for the given step and save it
  memo[count] = climbStairs(n, count + 1, memo) + climbStairs(n, count + 2, memo);

  return memo[count];
};