# 手把手带你玩转JS(I/O)异步并发
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.27 /PM 20:30
>偶然间接触到了Node的异步I/O与Async流程控制库，便着手研究了一番Node单线程的并发与并行之间的关系，
并且顺便接触了Node.js高并发。
>
>Node异步I/O实现
>>第一个阶段：提交请求   
>>第二个阶段：处理请求
>
>Async流程控制
>- 介绍
>>Async是基于JavaScript语言的流程控制库，专门为Node.js框架而设计，同时也可以直接在浏览器中使用。
>- 串行流程控制
>>Async库的串行流程控制是通过series函数来实现的

```bash
   实例：
   /**
    * @time  2018/9/21 10:26
    * @author  Bill Wang <1826001146@qq.com>
    * @desc    Async异步流程控制
    * @param   series()串行流程控制
    *          语法：series(tasks,callback)
    *          @tasks:可以是json,可以是array,参数类型不同，返回值不同，在回调函数中的返回值就是什么。
    *          @callback:回调函数，用来接收串行流程控制所得到的值。
    * @todo   练习并且熟练使用
    */
   const async = require('Async');
   async.series([
           (callback) => {
               callback(null, 'Hello');
           },
           (callback) => {
               callback(null, 'World');
           },
           (callback) => {
               callback(null, 'Bill Wang');
           }
       ],
       (err, results) => {
       //这里使用扩展运算符进行内部遍历数组的值，序列化参数列表
           console.log(...results)
       });
```
>- 瀑布模式流程控制
>>Async库的瀑布模式流程控制是通过waterfall()函数来实现的

```bash
 实例：
 /**
  * @time  2018/9/21 10:44
  * @author  Bill Wang <1826001146@qq.com>
  * @desc  瀑布模式流程控制
  * @param  waterfall(tasks,callback)
  *         @tasks:可以是一个数组
  *         @callback:回调函数，用来接收前面返回的结果
  * @todo  练习并且熟练使用
  */
 const async = require('async');
 async.waterfall([
     (callback) => {
         callback(null, 1);
     },
     (data,callback) => {
         callback('test', 2);
     },
     (data,callback) => {
         callback(null, 3);
     }
 ],(err,results)=>{
     console.log(results)
 })
```
>- 并行流程控制
>>Async并行流程控制是通过parallel()函数来实现的

```bash
 实例：
 /**
  * @time  2018/9/21 10:59
  * @author  Bill Wang <1826001146@qq.com>
  * @desc  Async并行流程控制
  * @param parallel(task,callback)
  *        @task:可以是数组也可以是JSON对象，是哪种类型就返回哪种类型
  *        @callback:回调函数，用来返回task执行后接收的数据
  *        并发控制就是在同一时间干两件事或者多件事
  * @todo 练习并且熟练使用
  */
 const async = require('async');
 const http = require('http');
 console.time('time');
 async.parallel([
     (callback) => {
         console.log('我是进程1,开始并发攻击网站');
         let count1 = 0;
         setInterval(()=>{
             http.get('http://www.gsut.edu.cn/w/',(res)=>{
                 count1++;
                 console.log(`进程1攻击${count1}次`);
                 res.on('error',()=>{
                     console.log(`进程1攻击失败!!`);
                 })
             });
         },0);
         callback(null, '准备!!!');
     },
     (callback) => {
         console.log('我是进程2，开始并发攻击网站');
         let count2 = 0;
         setInterval(()=>{
             http.get('http://www.gsut.edu.cn/w/',(res)=>{
                 count2++;
                 console.log(`进程2攻击${count2}次`);
                 res.on('error',()=>{
                     console.log(`进程2攻击失败!!`);
                 })
             })
         },0)
         callback(null, '准备!!!');
     },
     (callback) => {
         console.log('我是进程3，开始并发攻击网站');
         let count3 = 0;
         setInterval(()=>{
             http.get('http://www.gsut.edu.cn/w/',(res)=>{
                 count3++;
                 console.log(`进程3攻击${count3}次`);
                 res.on('error',()=>{
                     console.log(`进程3攻击失败!!`);
                 })
             })
         },0)
         callback(null, '准备!!!');
     }
 ], (err, results) => {
     console.log(...results);
 });
 console.timeEnd('time');
```
>- 其他流程控制函数
>>Async限制并行流程控制----------通过parallelLimit()函数来实现    
>>Async队列流程控制----------通过queue()函数来实现
-------------------------------------------------------------------
### 上面的部分也已经翻篇，下面介绍一些进程线程的软知识
>- 什么是单线程？
>>单线程的也就是程序执行时，所跑的程序路径（处理的东西）是连续顺序下来的，必须前面的处理好，后面的才会执行到。  
> 
>- 什么是多线程？   
>>多线程是指程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，
  也就是说允许单个程序创建多个并行执行的线程来完成各自的任务。
>- 什么是进程？ 
>>当一个程序开始运行时，它就是一个进程，进程包括运行中的程序和程序所使用到的内存和系统资源。
  而一个进程又是由多个线程所组成的。
>- 什么是线程？
>>线程是程序中的一个执行流，每个线程都有自己的专有寄存器(栈指针、程序计数器等)，但代码区是共享的，
  即不同的线程可以执行同样的函数。
>- 多线程与单线程的区别
>>生活举例
  你早上上班，正要打卡的时候，手机响了。。你如果先接了电话，等接完了，在打卡，就是单线程。
  如果你一手接电话，一手打卡。就是多线程。
  两件事的结果是一样的。。你接了电话且打了卡。
  -------------------------------------------------------------
  ### 下面才是重头戏，区别并发与并行
>并发
>>指在同一时刻只能有一条指令执行，但多个进程指令被快速的轮换执行，使得在宏观上具有多个进程同时执行的效果，但在微观上并不是同时执行的，只是把时间分成若干段，使多个进程快速交替的执行。这就好像两个人用同一把铁锨，轮流挖坑，一小时后，两个人各挖一个小一点的坑，要想挖两个大一点得坑，一定会用两个小时。
>
>并行
>> 指在同一时刻，有多条指令在多个处理器上同时执行。就好像两个人各拿一把铁锨在挖坑，一小时后，每人一个大坑。所以无论从微观还是从宏观来看，二者都是一起执行的。 
---------------------------------------------------------------
######  @沐沐 我叫沐沐，我是一个喜欢总结但是也喜欢忘记的人，但是我有时候更愿意反复不断地去温习知识，就如古语言：“温故而知新”嘛。           

--------------------------------------------------------------------------------------
#### 结合ES6新特性，模拟小车并行加速减速并且实时报表速度
>话不多说上代码

```bash
   /**
    * @time  2018/9/27 16:51
    * @author  Bill Wang <1826001146@qq.com>
    * @desc   JS车辆行驶模拟
    * @param
    * @todo
    */
   
   //定义一个小车的类
   class Car {
       constructor(speed, direction) {
           this.dirArr = ['东', '西', '南', '北'];
           this.index = Math.floor(Math.random() * 3);
           this.speed = speed;
           this.direction = direction;
       }
   
       start() {
           this.speed = 0;
           this.direction = this.dirArr[this.index];
           console.info(`开始启动!!!`);
       }
   
       static stop() {
           console.info(`准备停车!!!`);
       }
   
       addSpeed() {
           this.speed += 5;
       }
   
       reduceSpeed() {
           this.speed -= 5;
       }
   
       setSpeed(speed) {
           this.speed = speed;
       }
   
       getSpeed() {
           return this.speed;
       }
   }
   
   //定义A号车
   class CarA extends Car {
       constructor(speed, direction) {
           super(speed, direction);
       }
   
        ready() {
           console.info(`小车A准备启动`);
       }
   }
   
   //定义B号车
   class CarB extends Car {
       constructor(speed, direction) {
           super(speed, direction);
       }
   
       static ready() {
           console.info(`小车B准备启动`);
       }
   }
   
   //开始赛跑
   const async = require('async');
   async.parallel(
       [
           (callback) => {
               const carA = new CarA();
               carA.ready();
               carA.start();
               let timerA = setInterval(() => {
                   carA.addSpeed();
                   console.info(`小车A当前加速速度：${carA.speed}`);
                   carA.setSpeed(carA.speed);
                   if (Object.is(carA.getSpeed(), 80)) {
                       clearInterval(timerA);
                       Car.stop();
                       let timerB = setInterval(() => {
                           carA.reduceSpeed();
                           console.info(`小车A当前减速速度：${carA.speed}`);
                           if (Object.is(carA.speed, 0)) {
                               clearInterval(timerB);
                           }
                       }, 1000);
                   }
               }, 1000);
               callback(null, '-------比赛开始-------');
           },
           (callback) => {
               const carB = new CarB();
               CarB.ready();
               carB.start();
               let timerA = setInterval(() => {
                   carB.addSpeed();
                   console.info(`小车B当前加速速度：${carB.speed}`);
                   if (Object.is(carB.speed, 80)) {
                       clearInterval(timerA);
                       Car.stop();
                       let timerB = setInterval(() => {
                           carB.reduceSpeed();
                           console.info(`小车B当前减速速度：${carB.speed}`);
                           if (Object.is(carB.speed, 0)) {
                               clearInterval(timerB);
                           }
                       }, 1000);
                   }
               }, 1000);
               callback(null, '****23333****');
           },
       ], (err, results) => {
           console.info(...results);
       });
```
