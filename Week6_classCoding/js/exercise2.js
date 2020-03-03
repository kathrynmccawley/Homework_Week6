//2. Create a function that will accept a date or year and calculate if it falls on a Leap Year.

function leapYearCheck(year) {
  if ((year % 100 == 0 && year % 400 == 0) || year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYearCheck(2020));
console.log(leapYearCheck(2019));
