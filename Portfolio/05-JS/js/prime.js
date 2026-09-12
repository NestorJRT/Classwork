/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function (n) {
  "use strict";

  var fromInput = false;

  if (n === undefined) {
    fromInput = true;
    n = document.getElementById("num").value;
  }

  n = parseInt(n, 10);
  var i,
    sequence = [];

  if (isNaN(n) || n < 2) {
    if (fromInput) {
      document.getElementById("pf").textContent = "Enter an integer greater than 1.";
    }
    return sequence;
  }

  function isPrime(n) {
    var i;

    if (n < 2) {
      return false;
    }

    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  //TODO: Check which numbers are factors of n and also check if
  // that number also happens to be a prime
  for (i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      if (isPrime(i)) {
        sequence.push(i);
      }
      n /= i;
    }
  }

  if (n > 1 && isPrime(n)) sequence.push(n);

  if (fromInput) {
    document.getElementById("pf").textContent = sequence.join(" × ");
  }

  return sequence;
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));
