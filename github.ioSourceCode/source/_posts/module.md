---
title: JS模块机制
date: 2018-11-28 21:07:40
tags:
  - JS模块化
  - ES6
  - 封装
---

## 前言

>&emsp;&emsp;相信很多人都想过去写写自己封装的函数工具库。如何去暴露一个函数库呢，我这里有两种方案，一种是return一个对象，一种是匿名函数自调用也叫IIFE AUTO EXECUTE.

## myJS工具库（源码示例）

>&emsp;&emsp;给大家介绍一下，这是我自己封装的一套DOM原生操作的工具库函数，初衷是用在Vue中，但是方便测试，还是先改造为了适用于HTML端。

### 源码剖析

```javascript
/**
 * @time  2018/11/27 19:24
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  当你有一种想自己写工具库的时候，那种欲望是无法磨灭的，就比如现在的我，
 *        这里有一个思路就是匿名函数自调用，达到把工具函数暴露给window
 * @todo  JS-tools
 */
'use strict';

(() => {
    window.$ = {
        /**
         * @time  2018/11/27 19:30
         * @author  Bill Wang <vuejs@vip.qq.com>
         * @desc  封装一个选择器
         * @todo 封装一个选择器
         */
        select(cssSelect) {
            return document.querySelector(cssSelect);
        },
        /**
         * @time  2018/11/27 19:33
         * @author  Bill Wang <vuejs@vip.qq.com>
         * @desc 添加class操作
         * @param  {string} cssSelect - css选择器
         * @param  {string} classes - 对于连续class的接收
         * @todo  增加Dom类
         */
        addClass(cssSelect, classes) {
            classes.split(' ').map((item) => this.select(cssSelect).classList.add(item))
        },
        /**
         * @time  2018/11/28 17:41
         * @author  Bill Wang <vuejs@vip.qq.com>
         * @desc  删除DOM操作
         * @param  {string} cssSelect -css选择器
         * @param  {string} classes - 对于连续class的接收
         * @todo  移除dom类
         */
        removeClass(cssSelect, classes) {
            classes.split(' ').map((item) => this.select(cssSelect).classList.remove(item))
        },
        /**
         * @time  2018/11/28 21:32
         * @author  Bill Wang <vuejs@vip.qq.com>
         * @desc 操作DOM样式
         * @param {string} cssSelect - DOM对象
         * @param {object} obj - 一组对象，键表示styleName,值表示样式value
         * @todo 操作DOM样式
         */
        toDoCss(cssSelect, obj) {
            for (let o in obj) {
                this.select(cssSelect).style[o] = obj[o];
            }
        },
    }
})();
```

## 承诺

>&emsp;&emsp;我承诺，保证坚持更新这个库，目的在于使代码不再臃肿。
