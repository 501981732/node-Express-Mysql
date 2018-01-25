function getSomething() {
    return 'getSomething'
}

async function testAsync() {
    return 'hello wm'
}
async function test() {
    const v1 = await getSomething()
    const v2 = await testAsync()
    console.log(v1,v2)
}

// console.log(testAsync())   //返回Promise{'hello wm'}
// await 后面可以接受普通值 或者promise

test()