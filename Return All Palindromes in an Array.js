const isPalindrome = str => str === str.split('').reverse().join('');

const wordsArray = ["level", "hello", "madam", "world"];
const palindromes = wordsArray.filter(isPalindrome);
console.log("Palindromes:", palindromes);
