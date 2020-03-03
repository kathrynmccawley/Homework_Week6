function reverseString(rstring) {
  let stringSplit = rstring.split("");
  let reversedLetters = stringSplit.reverse();
  let finalString = reversedLetters.join("");
  if (finalString == rstring) {
    console.log("It's a pallindrome!");
  } else {
    console.log("Pallindrome? Absolutely not!");
  }
}

reverseString("racecar");
reverseString("cat");
