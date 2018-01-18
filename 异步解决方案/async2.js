// 按顺序完成异步操作实际开发中，经常遇到一组异步操作，
// 需要按照顺序完成。比如，依次远程读取一组 URL，然后按照读取的顺序输出结果。


// 下面是一次执行，然后统一返回

// --------------------续发请求
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}
// 问题是所有远程操作都是继发。
// 只有前一个 URL 返回结果，才会去读取下一个 URL，
// 这样做效率很差，非常浪费时间。我们需要的是并发发出远程请求。

// --------------------并发请求
async function logInOrder(urls) {
  // 并发读取远程URL
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
// 上面代码中，虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行，外部不受影响。后面的for..of循环内部使用了await，因此实现了按顺序输出。

// 并发的两种写法
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
