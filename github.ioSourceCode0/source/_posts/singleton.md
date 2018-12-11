---
title: 设计模式之单例模式
date: 2018-11-26 16:17:30
categories:
- 设计模式
tags:
   - JavaScript
   - 设计模式
   - ES6
   - 单例模式
cover_picture: images/pattern.jpg
---

## 前言

### 概述

>&emsp;&emsp;为了使得自己写的代码更加的具有健壮性，我也慢慢开始了研究设计模式，今天算是第一天起步，先从最简单的单例模式开始。

## 单例模式

### 概述

>&emsp;&emsp;单例模式之所以这么叫，是因为它限制一个类只能有一个实例化对象。经典的实现方式是，创建一个类，这个类包含一个方法，这个方法在没有对象存在的情况下，将会创建一个新的实例对象。如果对象存在，这个方法只是返回这个对象的引用。

### 实现

```javascript
/**
 * @time  2018/11/26 14:29
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  单例模式
 * @param
 * @todo  实践单例模式
 */

class Singleton {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.instance = null;
    }

    static isInstance(name, age) {
        if (!this.instance) {
            this.instance = new Singleton(name, age);
        }
        return this.instance;
    }

}

const Singleton1 = Singleton.isInstance('单例模式', 18);
const Singleton2 = Singleton.isInstance('测试', 19);
console.log(Singleton1);
console.log(Singleton2);
```

>Terminal Info

```bash
Singleton { name: '单例模式', age: 18, instance: null }
Singleton { name: '单例模式', age: 18, instance: null }

Process finished with exit code 0

```

### 应用场景

>&emsp;&emsp;比如一个网站的登录，点击登录后弹出一个登录弹框，即使再次点击，也不会再出现一个相同的弹框。又或者一个音乐播放程序，如果用户打开了一个音乐，又想打开一个音乐，那么之前的播放界面就会自动关闭，切换到当前的播放界面。这些都是单例模式的应用场景。
