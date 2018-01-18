## 前端js的传统异步解决方案及时回调，but我们亲爱的es6新增了三种解决方案:
-  Promise
-  Generator
-  async
---
之前项目中一直是用promise来解决，vue项目中的axios其实也是返回的Promise对象，async其实算是Generator的语法糖，这次我们不讲Promise 和Generator，因为对async一直理解不是很透彻，拿一个项目中的实例改造下async：

> 此项目用的vue+elementUI，这里是一个CRM管理了系统，客户档案信息管理模块，由于信息比较庞大，分成三个标签页，三个单独的接口信息，自然分成三个子组件。

![image]()

其中当父组件点击提交按钮时，会分别请求三个接口

-   第一个接口信息需要验证，第二三个接口信息不需要验证
-   只有当第一个请求成功之后，才会请求后面两个，
-   当后两个请求成功之后返回上一页。

> index.vue


```


    父组件点击提交触发子组件submit事件
    
    submitAll() {
        this.$refs.baseInfo.submit()
        /*if (this.buyer_info) {
            this.$refs.businessInfo.submit()
            this.$refs.chainInfo.submit()
            this.$router.go(-1)
        }*/
    },
    

```
> baseInfo.vue

```
    *提交第一个子组件信息*
    
    submit() {
      this.$refs['baseForm'].validate((valid) => {
          if (valid) {
            this.handleParams()
            axios.post('/v2/buyer/createBuyerInfo',this.baseForm).then(res =>{
                if(res.data.code == 1) {
                    this.$emit('isOK',true)
                } else {
                    this.$message({
                        showClose: true,
                        message: `${res.data.message}`,
                        type: 'warning'
                    })
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
```

index.vue

```
    父组件监听子组件的isOK事件
     <base-info :i18n="i18n" ref='baseInfo' :isEdit='isEdit' @isOK='isOK' @tot='tot'></base-info>
     
    子组件基本信息请求通过，之后执行其他子组件事件
    isOK(val) {
        if(val) {
            this.$message('成功')
            this.$refs.businessInfo.submit()
            this.$refs.chainInfo.submit()
            this.$router.go(-1)
        }
    },
```

> businessInfo.vue 和chainInfo.vue里面的submit事件是两个axios请求


```
    submit() {
        this.businessForm.purchase && this.handlerparams();
        axios.post('/v2/buyerbusiness/createbusiness',{...this.businessForm,...{buyer_id: this.$route.query.id || this.buyer_info.id ,is_edit: this.$route.query.id ? true : false}}).then(res =>{
            if(res.data.code == 1) {

            } else {
                this.$message({
                    showClose: true,
                    message: `业务信息${res.data.message}`,
                    type: 'warning'
                })
            }
        })
    },
```

---
这里面写法比较麻烦，并且有个问题就是可能当子组件的请求没有完成的时候就已经返回上一页了
这里可以用Promise.all的写法解决,这里我们尝试下async/await,修改如下：
## 解决方案
index.vue


```
isOK(val) {
    if(val) {
        this.$message('成功')
        const reqInOrder = async() =>{
            try {
                const a = await this.$refs.businessInfo.submit() 
                const b = await this.$refs.chainInfo.submit() 
                this.$router.go(-1)
            } catch(e) {
                console.log(e)
            }

        }
        reqInOrder()
    }
```

> businessInfo.vue和chainInfo.vue


```

其中fetch是自己封装的一个函数，返回的是个promise对象
当然axios本身返回的就是个promise对象，直接用就可以
submit() {
    this.businessForm.purchase && this.handlerparams();
    fetch('/v2/buyerbusiness/createbusiness',{...this.businessForm,...{buyer_id: this.$route.query.id || this.buyer_info.id ,is_edit: this.$route.query.id ? true : false}})
},
```
> fetch.js

```
export default function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    }).catch((error) => {
      reject(error)
    })
  })
}
```

> 这里还有个问题，由于businessInfo.vue和chainInfo.vue两个接口是没有先后顺序的，而我们之前的写法是继发请求，也就是第一个接口请求完成后才请求第二个接口，这是不合理的。

## 优化方案

> index.vue


```
isOK(val) {
    if(val) {
        this.$message('成功')
        const reqInOrder = async() =>{
            try {
            <!--并发处理请求-->
                let businessSubmit = this.$refs.businessInfo.submit() 
                let chainSubmit = this.$refs.chainInfo.submit() 
                const a = await businessSubmit
                const b = await chainSubmit
                this.$router.go(-1)
            } catch(e) {
                console.log(e)
            }
        }
        reqInOrder()
    }
},
```
当然第一个接口也是完全可以写进来的，这里就不写了。

> 并发请求的两种解决办法

```
// 并发的两种写法
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

有啥问题还请多多指正。





