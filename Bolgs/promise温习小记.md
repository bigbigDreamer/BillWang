# promise温习小记
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.17 /PM 18:59

------------------------------------------------------
>Promise
>>Promise是解决回调地狱的一种解决方式，但是它的基本实现还是基于回调实现的。

```bash
   /**
    * @time  2018/10/17 10:46
    * @author  Bill Wang <1826001146@qq.com>
    * @desc   今天带大家玩一下promise
    * @param  Promise
    * @todo  深入JS异步开发
    */
   const func = () => {
       let  PubSub = require('pubsub.js');
       return new Promise((resolve, reject) => {
           let index = 0;
           let timer = setInterval(()=>{
               index ++;
               console.log(index);
               if(index === 18) {
                   clearInterval(timer);
                   PubSub.publish('content',index);
                   return resolve('Promise永远18岁！');
               } else if (index === 20) {
                   return reject('Promise不能奔2，程序紧急停止！');
               }
           },1000);
       })
           .then((msg) => {
               console.log(msg);
               console.log('准备清扫垃圾');
               setTimeout(()=>{
                   PubSub.subscribe('content',(data)=>{
                       console.log(data);
                   });
               },0)
           }, (err) => {
               console.log(err);
           });
   };
   func();
```
>Promise包含pending、resolve、reject三种模式
>>解释：当进入Promise()的构造回调中，当程序运行开始时就会进入pending状态，
之后是执行逻辑代码，判定执行成功的闸门，或者执行失败的闸门，传入回调参数，在外层
调用一个then()函数获取执行结果。达到控制回调地狱的一种解决方案。

------------------------------------------------------------------------
>小科普
>>其实早在ES6没出现之际，Node端的异步回调一直是利用一个bluebird库模拟Promise的机制去
控制的，现在这样的标准出现后，倒也省下不少麻烦。
