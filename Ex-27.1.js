const numPromise = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Pass, the number is greater than 10!");
    } else {
      reject("Oh no, the number is less than or equal to 10!");
    }
  });
};

numPromise(8)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
