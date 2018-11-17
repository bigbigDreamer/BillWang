# ES6约定俗成
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.12 /PM 17:00
### 废话也就不多说了，今天再来回顾一遍阮大大的ES6编程规范以及自己的见解
>1.块级作用域
>>(1)let取代var
>>>ES6提出了两个新的声明变量的命令：let和const，其中，let可以完全取代var,因为两者语义相同，而且let没有副作用。
>>> - var 存在变量提升，而let没有；
>>> - var 存在内存泄露，而let没有。<br>
>>> - *下面我就举例加以说明：*
```bash
   1.ES5----var变量提升
   示例：
   console.log(test)
   var test = '测试一下吧'
   *正常情况
       (function (exports, require, module, __filename, __dirname) { console.log(test)                                                                     ^
       ReferenceError: test is not defined
   *实际情况
       undefined
   ES6---let
   *实际情况
        (function (exports, require, module, __filename, __dirname) { console.log(test)                                                                     ^
        ReferenceError: test is not defined
   2.内存泄露----var
    示例：for (var i = 0;i < 5; i++) {
           console.log(i)
       }
       console.log(`循环完成`);
       console.log(i)
   *正常情况
       会提示未定义
   *实际情况
       0
       1
       2
       3
       4
       循环完成
       5
       //上述实例均为var为代表的典型诟病
```
>>(2)全局常量和线程安全
>>>在let和const之间，建议优先使用const，尤其是全局环境下，不应该设置变量，只应该设置常量。<br>
>>> ----const优于let有几个原因
>>> - const可以提醒阅读程序的人，这个变量不应该改变；
>>> - const比较符合函数式编程思想，运算不改变值，只是新建值，而且也有利于将来的分布式运算；
>>> - JavaScript编译器会对const进行优化，所以多使用const，有利于提高程序的运行效率。
>>> - 所有的函数都应该设置为常量。<br>
>
>2.字符串
>>常用规则：
>>> - 静态字符串一律使用单引号或者反引号，不使用双引号；
>>> - 动态字符串使用反引号；
>>> - 个人见解：在操作数据库的时候比如sql语句可以适当的在外部使用双引号，内部单引号。
>>> - 举个栗子吧!
```bash
     var sql
                = "insert into teacher(Tid,Tname,Tsex,Tjg,Tbirth,Txl,TgTime,TendCol,TeTime,Tprofor,TjobTime,TnowJob)" +
                "value(" + Tid + "," + "'" + Tname + "'" + ",'" + Tsex + "','" + Tjg + "','" + Tbirth + "','" + Txl + "','" + TgTime + "','" + TendCol +
                "','" + TeTime + "','" + Tprofor + "','" +
                TjobTime + "','" + TnowJob + "')";
     /*
       注意看：这里是插入的原始态写法,其实这里只是举例而已,可以改写为以下写法:
       insert into teacher (Tid....) values(?,?,?);
       let values = [];
       connection.query(sql,values,(err,data,fileds)=>{
           //your code
       })
```
>解构赋值
>>使用规则
>>> - 使用数组成员对变量赋值的时候，优先考虑解构赋值；
>>> - 函数的参数如果是对象的成员，优先使用解构赋值。
>>> - 举个例子：
```bash
    let obj = {
           firstName: Bill,
           lastName: Wang,
              }
    function f ({firstName, lastName}) {
      //your code
    }
```
>4.对象
>>使用规则：
>>> - 单行定义的对象，最后一个成员不以逗号结尾；
>>> - 多行定义的对象，最后一个成员以逗号结尾。
>
>5.数组
>>使用规则
>>> - 使用扩展运算符(...)拷贝数组
>>> - 举个例子：
```bash
    let targetArr = [0,1,2,3,4];
    const cloneArr = [...targetArr];
```
>6.函数
>>使用规则：
>>> - 立即执行函数可以改写为箭头函数的形式；
>>> - 不用考虑this绑定的问题；
>>> - 以React为例，举个例子：
```bash
    import React,{Component} from 'react'
    import  Left from './left'
    import Right from './right'
    export default class App extends Component{
        state = {
            Fmsg:''
        }
        updateMsg =(newMsg)=>{
            let {Fmsg} = this.state;
            Fmsg = newMsg
            this.setState({Fmsg})
        }
        render () {
          return (
            <div>
                <h1>React小练习</h1>
                <Left data={this.state.Fmsg} updateMsg={this.updateMsg}/>
                <Right data={this.state.Fmsg}/>
            </div>
          )
        }
    }
    //重点是updateMsg,以往的做法都是在React中通过this.updateMsg.bind(this);来绑定this的。
```
>7.Map结构
>>使用规则：
>>> - 注意区分Object与Map，只有模拟现实世界的实体对象的时候，才会使用Object，如果只是需要key:value的数据结构，
使用Map结构，因为Map有内建的遍历机制--承载了Iterator接口的for ... of ...
>
>8.Class
>>使用规则：
>>> - 总是用class，取代需要prototype的操作。因为class的写法更加简洁，更加易于理解；
>>> - 使用extends去实现继承因为这样也会更加的简单，不会有破坏instance of 运算的危险。
>
>9.模块
>>使用规则：
>>> - module语法是JavaScript模块的标准写法，所以，坚持这种写法百利而无一害，使用import代替require；
>>> - 使用module取代module.exports；
>>>   - 如果默认输出一个函数，函数名的首字母应该小写；
>>>   - 如果模块默认输出一个对象，对象名的首字母应该大写。
>
>10.个人看法
>>关于async await的看法
>>> - 在开源社区与一位美国某公司做Node.jsAPI的一位工程师探讨的一番，有关未来在ES2017新提案会代替Promise，他也表示一致认同。
>>
>>关于ES6的深度学习
>>> - 一个提案仅仅只是增加的一些优化的东西，从某种意义而言，他不会改变本质，所以我想在未来几年内，ES规范应该不会出现什么翻天
覆地的变化，所以，尽管已经熟思es诸多用法及规范，但依旧还有一些未知领域没有探索到，未来我也做足了打算呢去面对任何的大小改变。

