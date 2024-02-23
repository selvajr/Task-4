const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const arrayToCheck = [2, 3, 5, 7, 10, 11, 13, 17];
  const primeNumbers = arrayToCheck.filter(isPrime);
  console.log("Prime numbers:", primeNumbers);

  