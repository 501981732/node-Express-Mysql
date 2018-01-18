function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();



// hw.next()
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

// ，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

// 遍历器对象的next方法的运行逻辑如下。

// （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

// （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。


// （1）异步操作的同步化表达

// Generator 函数的暂停执行的效果，意味着可以把异步操作写在yield表达式里面，
// 等到调用next方法时再往后执行。这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在yield表达式下面，
// 反正要等到调用next方法时再执行。所以，Generator 函数的一个重要实际意义就是用来处理异步操作，改写回调函数。

// function* loadUI() {
//   showLoadingScreen();
//   yield loadUIDataAsynchronously();  //这里异步加载数据
//   hideLoadingScreen();
// }
// var loader = loadUI();
// // 加载UI
// loader.next()

// // 卸载UI
// loader.next()

// Promise 的最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆then，原来的语义变得很不清楚。
// ，调用 Generator 函数，会返回一个内部指针（即遍历器）g。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。