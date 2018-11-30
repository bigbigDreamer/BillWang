---
title: Promise探析
date: 2018-11-06 14:56:54
tags:
 - Promise
 - DOM
 - ES6
---

## 前言

>&emsp;&emsp;上一篇，关于axios的二次封装，我们已经探讨过什么是Promise，它可以做什么的问题，现在，我们继续来通过一个简单的DOM案例探析。

## 你还在这样写？

### DOM原生事件

>&emsp;&emsp;根据MDN上面的相关推荐指导，我们应该更多地去使用addEventListener，而非那些原生定义的onclick之类的。

```bash
//比如我们尝试去添加一个动画效果
  window.onload = () => {
    document.querySelector('.app1')
         .addEventListener('mouseenter', (event) => {
               const timer =  setInterval(()=>{
                    event.style.opacity += 0.1;
                    if (event.style.opacity === 1)
                      clearInterval(timer);
                 },1000/20)
      });
  }
```

>&emsp;&emsp;我的天呐！一层、两层......总共三层回调，这已经调入回调地狱了，如果再深入设置其他的动画，那岂不是更乱了，想想办法吧。

## jQuery写法

```bash
 $(()=>{
   $('.app').hover(function(e)=>{
     const timer =  setInterval(()=>{
                       e.css({
                           opacity:`++0.1`
                       })
                       if (e.css('opacity') === 1)
                         clearInterval(timer);
                    },1000/20)
         });
   });
 })
```

>&emsp;&emsp;一样的酸爽对吧！

## 这样做才爽

### Demo

>JS部分

```bash
 window.onload = () => {
            return new Promise((resolve) => {
                document.querySelector('.app1')
                    .addEventListener('mouseenter', () => {
                        resolve('Test');
                    });
            })
                .then((data) => {
                    console.log(data);
                    if (data) {
                        let height =
                            getComputedStyle(document.querySelector('.app2'))['top'];
                        let value = Number.parseInt(height);
                        let timer = setInterval(() => {
                            value += 10;
                            console.log(value);
                            document.querySelector('.app2')
                                .style.top = `-${value}px`;
                            if (value === 200) {
                                clearInterval(timer);
                            }
                        }, 1000 / 20);
                    }
                    return true;
                }, (err) => {
                    console.log(err);
                })
                .then((data) => {
                    console.log(data);
                    console.log('开始执行显示');
                    if (data) {
                        document.querySelector('.app2')
                            .style.display = 'block';
                        document.querySelector('.app2')
                            .style.opacity = 0.6;
                    }
                })
        }
```

>HTML部分

```bash
  <div class="box">
      <div class="app1">
          <img src="./logo.png" alt="logo">
      </div>
      <div class="app2">
          Vue.js
      </div>
```

>CSS部分

```bash
 <style>
        .box{
            width: 300px;
            margin: 50px auto;
        }
        .app1 {
            width: 200px;
            height: 200px;
        }

        .app2 {
            width: 200px;
            height: 200px;
            background-color: gainsboro;
            opacity: 8;
            display: none;
            text-align: center;
            position: relative;
            top: 0;
        }
    </style>
```

### 总结

>&emsp;&emsp;一个Promise可以有多个then函数衔接处理，达到一个同步处理的效果，每次then之后，下一个then接收的是上一个then的return数据，第一个then则接收的是最初的promise回调resolve放行的数据。
