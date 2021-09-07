var numberToWords = require('number-to-words');

numberToWords.toWords(13); // => “thirteen”
console.log(numberToWords.toOrdinal(1)); // prints 1st
numberToWords.toWordsOrdinal(1);
console.log(numberToWords.toWords(1)); //print one

console.log(numberToWords.toWords(1234567890));

