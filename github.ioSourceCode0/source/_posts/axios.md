---
title: axios的二次封装
date: 2018-11-04 03:30:19
tags:
 - axios
 - ajax
 - Promise
---

## 前言

&emsp;&emsp;&emsp;今天深夜探究，来跟大家讨论一番axios的二次封装。主要用到的就是Promise回调地狱解决方案。

-------------------------

## Axios

### 概述

&emsp;&emsp;&emsp;Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

### 安装

```bash
$ npm i axios -S
```

### CDN

```bash
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
### 使用

```bash
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

----------

## [Promise](https://www.jianshu.com/p/43f948051d65)

### 概述

&emsp;&emsp;&emsp;Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。
&emsp;&emsp;&emsp;所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
&emsp;&emsp;&emsp;这样的好处就是避免开发者调入回调地狱，使得异步开发更加优雅。

### 使用

```bash
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (success){
    resolve(value);
  } else {
    reject(error);
  }
});
```

------------------------

## 二次封装

### 目的

&emsp;&emsp;&emsp;Axios二次封装的目的在于简化操作，能够在不同层面上满足开发者需求。

### 参数说明

<table style = "margin-top :-300px">
    <tr>
        <td style="width:50px;">method</td>
        <td>指明ajax发送的是post还是get</td>
    </tr>
    <tr>
       <td>url</td>
       <td>指明发送ajax的url地址</td>
    </tr>
    <tr>
        <td>json</td>
        <td>指明在发送的过程中附带的数据（默认JSON）</td>
    </tr>
    <tr>
        <td>sync</td>
        <td>指明是否异步，可选值为：true/false</td>
    </tr>
</table>

### Code Demo

```bash
/**
 * @time  2018/11/3 21:49
 * @author  Bill Wang <1826001146@qq.com>
 * @desc 对axios的二次封装
 * @param {string} -method 表示：post/get {string} -url 表示：请求地址  {json} json 表示传送数据
 * @todo  实现axios的Promise代码控制实现
 */

const ajax = function (method, url, json, sync) {
    return new Promise(function (resolve, reject) {
        if (method) {
            if (method === 'post') {
                let data = require('axios').post(url, json, {async: sync});
                if (data) {
                    resolve(data);
                }
            }
            else if (method === 'get') {
                let data = require('axios').get(url, {
                    params: json,
                }, {async: sync});
                resolve(data);
            }
        }
        reject('some wrong with your code!!!');
    })
        .then(data => {
            if (data) {
                return data.data;
            }
        }, err => {
            return err;
        });

}

//这个地方返回的是一个Promise{pending}状态，所以只需要在then中继续执行获取数据即可
ajax('post', 'https://www.easy-mock.com/mock/5b924623321f1076a4fc149f/example/persons', '', true)
    .then(result => {
        console.log(result.data);
    });
```

----------

## 总结

>&emsp;&emsp;就某种程度程度而言我还是比较喜欢使用Promise去处理一些回调任务特别多的工作的，当然像Generator生成器这样的神器也用的更多，自从在ES8中提出草案async语法糖，使得操作更加简便，同样也使得异步代码更加优雅。

