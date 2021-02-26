// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45

// I number of stairs
// O number of distinct ways to reach top
// C n is >= 1 and <= 45

var climbStairs = function(n, counter) {

  steps = steps || 0
  counter = counter || 0
// at each step, call climb stairs function to return # of distinct steps

// if n === 1, return 1

// otherwise add 2 to counter

// go up a step n + 1

// return counter

};