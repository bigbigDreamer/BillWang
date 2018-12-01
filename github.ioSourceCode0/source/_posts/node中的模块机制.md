---
title: node中的模块机制
date: 2018-11-29 20:41:30
tags:
   - node
   - module.exports
   - exports
---

## 前言

>&emsp;&emsp;今天就node中的exports与module.exports作以阐释。

## exports&module.exports

### 关系

>&emsp;&emsp;exports是一个对象，并且是module.exports的引用，可以毫不夸张的说`exports=module.exports`。

### 原理

>&emsp;&emsp;每个模块内部都有一个自己的module对象，该module对象中有一个exports对象。

```javascript
 var module = {
      exports:{
        // your code...
       }
  }

  //At Bottom
  //Always return
  return module.exports;
```

### 注意

>&emsp;&emsp;我们可以这样理解module.exports，谁require我，谁就可以得到module.exports。

>&emsp;&emsp;当exports重新赋值会指向另外一个对象，也就是会断开与module.exports的联系。

```javascript
 // 例如
 var foo = function() {

   // your code
 }
 exports = foo;
```

>&emsp;&emsp;同理，给module.exports赋值会断开与exports的联系，因为无论如何最终返回的都是module.exports。

### 惯性思维
>&emsp;&emsp;exports被创建出来的意义是为了简化写法，至于想用谁，那就需要适当的根据场景去抉择。如果一个模块需要导出而非挂载，则需要使用`module.exports`。