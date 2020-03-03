//3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.

const blockText =
  "Roald Dahl was a British novelist, short story writer, poet, screenwriter, and wartime fighter pilot. His books have sold more than 250 million copies worldwide. Dahl was born in Wales to Norwegian immigrant parents. He served in the Royal Air Force during the Second World War.";

const ex2 =
  "A man walked out of his apartment, it is raining, he's got no umbrella. He runs beneath the awnings, trying to save his suit";

function countWords(text) {
  modText = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g);
  return modText.split(" ").length;
}

console.log(countWords(blockText));
console.log(countWords(ex2));
