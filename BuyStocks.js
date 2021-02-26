
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    
  var biggestProfit = 0;
  var min = Number.MAX_SAFE_INTEGER;
  
  for(var i = 0; i < prices.length; i++) {
      if(prices[i] < min) {
          min = prices[i]
      } else if (prices[i] - min > biggestProfit) {
          biggestProfit = prices[i] - min
      }
  }  
  return biggestProfit;
};