let exString = "hello hello I don't know why you say goodbye";

function reverseString(rstring) {
  let stringSplit = rstring.split("");
  let reversedLetters = stringSplit.reverse();
  let finalString = reversedLetters.join("");
  return finalString;
}

console.log(reverseString(exString));
