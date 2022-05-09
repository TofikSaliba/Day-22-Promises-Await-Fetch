const makeAllCaps = (arr) => {
  return arr.map((word) => word[0].toUpperCase() + word.slice(1));
};

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((word) => {
      if (/[^A-Za-z]/.test(word)) {
        reject(`Found a char that is not a letter! in the word: ${word}`);
      }
    });
    resolve(makeAllCaps(arr).sort());
  });
};

const arrWords = [
  "hi",
  "there",
  "do",
  "you",
  "think",
  "ill",
  "pass",
  "the",
  "test",
];

const arrWords2 = [
  "this",
  "will",
  "fail",
  "because",
  "of",
  "the",
  "number",
  "h3re",
];

sortWords(arrWords)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

sortWords(arrWords2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
