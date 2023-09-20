// Number methods

// toFixed() 
const lotsOfDecimal = 1.766584958675746364;
// console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2); // = 1.77
// console.log(twoDecimalPlaces); 

// Number() 
let myNumber = "74";
// console.log(myNumber+=3); = 743
// console.log(Number(myNumber) + 3); = 77

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b);
