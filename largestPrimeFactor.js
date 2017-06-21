exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  factor = 0;
  for (let i = n - 1; i > 1; i--){
    if (n % i === 0){
      factor = i;
      for (let j = factor - 1;j >= 1; j--){
        if(factor % j === 0){
          factor = j;
          for (let k = factor - 1; k >= 1; k--){
            if (factor % k === 0){
              factor = k;
              primeNumber = factor;
              return primeNumber;
            }
          }
        }
      }
    }
  }
  return primeNumber;
};
console.log(exports.largestPrimeFactor(23423455));