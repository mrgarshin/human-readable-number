module.exports = function toReadable (number) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tys = [undefined, undefined,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number <= 9) {
    return digits[number];
  }
  if (number <= 19 && number >= 10) {
    return teens[number - 10];
  }
  if (number <= 99 && number >= 20 ) {
    let floorToTen = Math.floor(number/10);
    if (number - floorToTen*10 > 0) {
      return tys[floorToTen] + " " + digits[number - floorToTen*10];
    } else {
      return tys[floorToTen];
    }
  }
  if (number > 99) {
    let floorToHundred = Math.floor(number/100);
    let remainder = number - floorToHundred*100;
    if (remainder === 0) {
      return digits[floorToHundred] + " hundred";
    }
    if (remainder <= 9) {
      return digits[floorToHundred] + " hundred " + digits[remainder];
    }
    if (remainder <= 19 && remainder >= 10){
      return digits[floorToHundred] + " hundred " + teens[remainder-10]; 
    }
    if (remainder <= 99 && remainder >= 20) {
      let floorToTen = Math.floor(remainder/10);
      if (remainder - floorToTen*10 > 0) {
        return digits[floorToHundred] + " hundred " + tys[floorToTen] + " " + digits[remainder - floorToTen*10]; 
      } else {
        return digits[floorToHundred] + " hundred " + tys[floorToTen]; 
      }
    }
  }
}