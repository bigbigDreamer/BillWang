---
title: 寻找句子中最长的单词
date: 2018-11-11 15:17:31
categories:
- ES6
tags:
 - ES6
cover_picture: images/JS.jpg
---

### 题目要求

>&emsp;&emsp;根据所给的句子，判断句子中最长的一个的单词，并且能够返回最长的那个单词以及单词的长度。

### 解决思路

>&emsp;&emsp;根据所给句子，先进行单词分割，将分割单词存放进数组之中，然后利用map方法进行过滤，返回单词的长度数组。最后利用forEach方法进行筛选，如果相同，就返回那个单词，在处理单词长度的时候，利用Math内置的max方法，再加ES6提供的rest运算符自遍历数组取出最大值。

```JavaScript
/**
 * @time  2018/11/11 14:21
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  找出句子中的最长的单词并返回的他的长度，别人提的问题，我来尝试尝试
 * @param sentence {string} -执行需要查找的字符串
 * @todo
 */
class Dreamer{
    constructor(){
        //内部处理的句子
        this.sentence = null;
        //用于存储分割句子后的单词
        this.box = [];
        //用于存储句子单词的临时箱子
        this.tempBox = [];
        //用于接收查找匹配值
        this.tempStr = null;
    }
    find (sentence){
        this.sentence = sentence;
        this.box = this.sentence.split(' ');
        this.tempBox = this.box
                 .map((item,index)=>{
           return item.length;
        });
      console.log(`查询到最长的单词：${this.filter(this.box,Math.max(...this.tempBox))}，它的长度大概有：${Math.max(...this.tempBox)}`);
       // return Math.max(...this.tempBox);
    }
    filter(arr,length){
        let s =  arr.forEach((item,index)=>{
            if(item.length === length){
                this.tempStr = item;
            }
        });
        return this.tempStr;
    }
}
const obj = new Dreamer();
obj.find('Hello Worid5 Boy');
```

>控制台打印

```bash
"E:\WebStorm 2018.2.2\bin\runnerw.exe" E:\node.exe D:\knowledgeOver\JS高级复习\找出句子中最长的单词.js
查询到最长的单词：Worid5，它的长度大概有：6

Process finished with exit code 0
```