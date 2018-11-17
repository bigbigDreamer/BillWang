# for循环诸多事宜
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.10 /PM 21:11
### 今天贫道就为大家解析for···in loop  and  Traditional for loop
> 今天在code社区与我的外国好友tundeiness讨论了一个话题，他的源代码如下  
                               
```bash
let s = [23, 65, 98, 5];
let newArray = [];
Array.prototype.myMap = callback => {
    // Add your code below this line
    for (let num in s) {
        newArray.push(s[num]);
    }
    // Add your code above this line
    //return newArray;
    console.log(newArray);
};

s.myMap((item)=>
   item * 2
);
```
> 但是返回的结果却是这样的                                      

```bash
   [ 23, 65, 98, 5, [Function] ]
```
>我也很好奇这个问题，于是我便深究了for in loop的特点
>>for..in循环会把某个类型的原型(prototype)中方法与属性给遍历出来，所以这可能会导致代码中出现意外的错误
>>当然，上面就是实例。<br>
>>所以for in更适合遍历对象，不要使用for in遍历数组。<br>
>>那么除了使用for循环，如何更简单的正确的遍历数组达到我们的期望呢（即不遍历method和name），ES6中的for of更胜一筹.<br>
>>*记住，for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。*

>当然，对于这个bug也是有一定的解决思路的。
>>方案一、在for in loop中进行原型判断，那么就不会遍历原型对象的属性与方法                                  

```bash
   let s = [23, 65, 98, 5];
   let newArray = [];
   Array.prototype.myMap = callback => {
       // Add your code below this line
       for (let num in s) {
           if(s.hasOwnProperty(num))
           newArray.push(s[num]);
       }
       // Add your code above this line
       //return newArray;
       console.log(newArray);
   };

   s.myMap((item)=>
       item * 2
   );
```
>>方案二、使用传统for loop<br>
>>方案三、使用for of loop<br>
>>方案四、使用es5经典Object.keys(obj)也可以达到目的
-----------------------------------------------------------------
## 小记 
>感想：就某种意义而言，我们应该服从一种规则，那就是就简原则，像《代码整洁之道》中所提。
