const promise1 = Promise.resolve(100);
const promise2 = 50;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 80, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});