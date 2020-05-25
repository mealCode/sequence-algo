/**
 * Left-pads the given number to the desired length.
 * e.g 00000G
 */
function padNumberToLength (inval, length, padChar = "0") {
  if (inval.length < length) {
    while (inval.length < length) {
      inval = padChar + inval;
    }
  }
  return inval;  
};

/**
 * increment startVal by the given numsys
 */
function increment (numsys, startVal) {

  let newVal = "";
 
  let charIdx = (startVal.length - 1), charVal = startVal.charAt(charIdx);
  for (;
    (charIdx >= 0);
    charVal = startVal.charAt(--charIdx)
  ) {
    let newDigitValue;
    const currentNumsysIdx = numsys.indexOf(charVal);

    if (currentNumsysIdx !== -1) { 
      if (currentNumsysIdx === (numsys.length - 1)) {
        newDigitValue = numsys.charAt(0);
        newVal = newDigitValue + newVal;
      } else {
        newDigitValue = numsys.charAt(currentNumsysIdx + 1);
        newVal = startVal.substring(0, charIdx) + newDigitValue + newVal;
        break;
      }
    } else {
      newDigitValue = numsys.charAt(0);
      newVal = startVal.substring(0, charIdx) + newDigitValue + newVal;
      break;
    }
  }
  return newVal;
};

/**
 * Pads a number to the appropriate length before incrementing.
 */
function padAndIncrement (numsys, startVal, length, padChar){
  if (startVal.length < length) {
    startVal = this.padNumberToLength(startVal, length, padChar);
  }
  return this.increment(numsys, startVal);``
};

/**
 * Returns the total number of possible unique values in the sequence
 */
function calculateNumberOfValues(numsys, length) {
  return Math.pow(numsys.length, length);
};

let numsys = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
let padChar = "0";
let length = 6;

console.log(calculateNumberOfValues(numsys, length));
console.log(padAndIncrement(numsys, 'F', length, padChar))