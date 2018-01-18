// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// });

// ajax
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

// // demo
// getJSON("/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });


const p1 = new Promise(function (resolve, reject) {
  // setTimeout(() => reject(new Error('fail')), 3000)
  setTimeout(() => resolve(111), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(result => console.log(result))



// 多个

// const databasePromise = connectDatabase();

// const booksPromise = databasePromise
//   .then(findAllBooks);

// const userPromise = databasePromise
//   .then(getCurrentUser);

// Promise.all([
//   booksPromise,
//   userPromise
// ])
// .then(([books, user]) => pickTopRecommentations(books, user))