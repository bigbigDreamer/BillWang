# 全面剖析JavaScript中的this
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.3 /PM 14:52

-----------------------------------------------------------------------------------------
>前言：抛开以往一些浅薄的认识，今天便深入的探讨一番JavaScript中的this(这个就连很多资深开发者都难以解释明白的“神秘物种”)。

-----------------------------------------------------------------------------------------
>介绍
>>this机制
>>> - this是在运行时绑定的，并不是在编写时绑定的，它的上下文取决于函数调用时的各种条件。this的绑定与函数的声明位置没有任何关系，只取决于函数的调用方式。
>>> - 当一个函数被调用时，会创建一个活动记录（有时候称它为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式，传入的参数等信息。this就是这个记录的一个属性，会在函数执行过程中被用到。
>>> - this既不指向函数自身也不指向函数的词法作用域，抛开以往错误的假设和理解。this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
>>
>>调用栈与调用位置
>>>- 调用栈：函数调用链
>>>- 调用位置：函数绑定this的规则   
>>
>>绑定规则
>>>- 默认绑定
>>>```bash
>>>        function f (){
>>>           console.log(this.a)
>>>        }
>>>        var a = 2;
>>>        f();//2
>>>       //假若使用严格模式'use strict'那么对于global对象将会识别为undefined
>>>```
>>>- 隐式绑定
>>>```bash
>>>     function f () {
>>>         console.log(this.name)
>>>     }
>>>     let obj = {
>>>        name:'张三'，
>>>        fun:f
>>>     }
>>>     obj.fun() //张三
>>>      //but try this method
>>>        var bar = obj.fun;
>>>        var name = '李四';
>>>        bar();
>>>```
>>>但是上面的代码会出现一个问题就是，当处于严格模式下会出现丢失绑定对象，也就是说它会默认绑定对象为undefined或者全局。（取决于是否为严格模式）,我们就具体的看一个例子吧！  
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/%E9%9A%90%E5%BC%8F%E7%BB%91%E5%AE%9A1.gif)
>>>```bash
>>>    //第二种情况，当做函数参数传递
>>>    function  doWith(fn) {
>>>         fn();
>>>    }
>>>    function f () {
>>>       console.log(this.name)
>>>       }
>>>    let obj = {
>>>         name:'张三'，
>>>         fun:f
>>>       }
>>>       var name = '李四';
>>>       doWith(obj.fun)//李四
>>>```
>>>--------------------------------------------------------
>>>```bash
>>>     //第三种情况，传入内置语言函数
>>>      function f () {
>>>       console.log(this.name)
>>>       }
>>>    let obj = {
>>>         name:'张三'，
>>>         fun:f
>>>       }
>>>       var name = '李四';
>>>     setTimeout(obj.foo,100);//'李四'
>>>```
>>>- 显示绑定                            
>>>```bash
>>>   function foo () {
>>>      console.log(this.name);
>>>   }
>>>   var obj = {
>>>     name:'张三'
>>>   }
>>>   foo.call(obj)//张三
>>>   foo.apply(obj)//张三
>>>```
>>>但是虽然有显示绑定这种骚操作还是会出现隐式绑定那中尴尬的境况，绑定对象丢失。其实不要慌，还是有解决方案的，显示绑定的一种变异情况，硬绑定：
>>>```bash
>>>    function foo (){
>>>       console.log(this.name);
>>>    }
>>>    const obj = {
>>>      name:'张三'
>>>     }
>>>     var bar = foo.bind(obj)
>>>     bar();//张三
>>>```
>>>- new 绑定
>>>```bash
>>>   function f(name) {
>>>       this.name = name;
>>>       this.say = function () {
>>>           console.log(this.name)
>>>       }
>>>   }
>>>   var fun = new f('张三');
>>>   fun.say()
>>>```

-------------------------------------------------------------
>>绑定优先级
>>>new 绑定>显示绑定>隐式绑定>默认绑定

--------------------------------------------------------------
>更“安全”的this-----“DMZ”(demilitarized zone,非军事区)
>>```bash
>>   function foo(a) {
>>       console.log(`${a}`);
>>   }
>>   var obj = {
>>       a:'我就是一个obj对象',
>>   };
>>   //DMZ空对象比{}更空
>>   let _ = Object.create(null);
>>   foo.call(_,obj.a);
>>```
>>可能这样你还是不能够理解DMZ到底干了什么事，咱们继续看一个代码示例：
>>```bash
>>   //DMZ代码存在的情况下
>>     function foo(a) {
>>       console.log(`${a}`);
>>   }
>>   var obj = {
>>       a:'我就是一个obj对象',
>>   };
>>   //DMZ空对象比{}更空
>>   let _ = Object.create(null);
>>   foo.call(_,obj.a);
>>     console.log(a)//报错，提示未定义
>>     //DMZ代码不存在的情况下
>>     function foo (a) {
>>         console.log(a)
>>     } 
>>     var obj = {
>>        a:'我是对象中的a'
>>     }
>>     var a = '我是全局的a'
>>     foo.call(obj.a)//undefined
>>
>>```
----------------------------------------------------------------
>知识面拓展
>>ES6中的箭头函数并不会使用这四条标准的绑定规则，而是根据当前的词法作用域来决定this，具体来说，箭头函数会继承外层函数调用的this绑定（无论this绑定到什么）。这种机制类似于ES6之前代码中的self = this机制一样。
>>```bash
>>    function f (){
>>        setTimeout(  () =>{
>>           console.log( this.a)
>>          },0)
>>      }
>>    const obj = {
>>         a:45
>>        }
>>   var a = 9;
>>   f.call(obj)   //4
>>```

