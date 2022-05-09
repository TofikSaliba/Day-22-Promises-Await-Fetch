const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr && arr.length > 0) {
      resolve(arr.map((word) => word[0].toUpperCase() + word.slice(1)));
    } else {
      reject("Check argument!");
    }
  });
};

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((word) => {
      if (/[^a-z]/i.test(word)) {
        reject(`Found a char that is not a letter! in the word: ${word}`);
      }
    });
    resolve(arr.sort());
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

// sortWords(arrWords2)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! empty array or undefined
makeAllCaps([])
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//! working
makeAllCaps(arrWords)
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//! something other than letter
makeAllCaps(arrWords2)
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
