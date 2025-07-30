let prices = [1, 2, 2, 3, 4, 4, 5];

let total = prices.reduce((sum, current) => sum + current, 0);
console.log(total);