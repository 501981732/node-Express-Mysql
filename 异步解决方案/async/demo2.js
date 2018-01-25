function takeLongTime() {
    return new Promise((resove,reject) =>{
        // setTimeout(resove,2000)
        setTimeout(()=>{resove('hello')},2000)
    })
}
// 两秒之后返回'hello'
const m = async() =>{
    const v = await takeLongTime()
    console.log(v)
}

m()