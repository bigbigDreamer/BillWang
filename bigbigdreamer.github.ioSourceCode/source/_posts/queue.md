---
title: queue模拟
date: 2018-11-10 23:16:19
tags:
 - queue
 - es6
 - 数据结构
---

### 前言
>&emsp;&emsp;数据结构是每一个程序员的内功，无论怎样，我们都应该去坚持修炼好这门内功心法。废话不多讲，开始queue模拟，今天开始，每天模拟一种数据结构。

### Demo

```bash
/**
 * @time  2018/11/10 22:54
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  队列模拟
 * @param null {string}
 * @todo 模拟队列
 */
class Queue {
    constructor() {
        this.queue = [];
    }

    enter(element) {
        this.queue.push(element);
    }

    outer() {
        this.queue.shift();
    }

    empty() {
        this.queue = [];
    }

    show() {
        return this.queue;
    }
}

const queue = new Queue();
queue.enter(3);
queue.enter(4);
queue.enter(5);
queue.enter(6);
console.log(queue.show());
queue.outer();
console.log(queue.show());
queue.empty();
console.log(queue.show());
```
### 原理解析

>&emsp;&emsp;众所周知，队列的规则就是先进先出，所以无论是`enter`还是`outer`，`empty`或者`show`，都遵循队列的一般原则，这里我用数组模拟。

