---
title: CSS气泡探索
date: 2018-12-07 15:37:07
categories:
- CSS
tags:
 - CSS
 - 气泡提示
cover_picture: images/CSS.png
---

## 前言

>&emsp;&emsp;不知诸位对于已经学过的知识，加入淡忘之后会不会显得心神不宁，反正我的感触颇大的，所以，只有自己创造案例，进行不断的复习，才是王道，复习的多了，嚼的久了，才能更好地消化，不是吗？

## 纯CSS打造气泡

### 感想

>&emsp;&emsp;小子学的尚且有些浅薄，所以暂时没有做过多的优化，还望莫见笑。

### DEMO

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>玩玩CSS</title>
    <style>
        .box1{
            border-top: 150px;
            border-left: 400px;
            border-right: 400px;
            border-bottom: 0px;
            border-style: solid;
            border-color: burlywood transparent transparent transparent ;
        }
        .box2{
            background-color: burlywood;
        }
        .tip1{
            margin: 50px auto;
            width: 200px;
            height: 100px;
            background-color: burlywood;
            border-radius: 15px;
        }
        .tip2{
            width: 200px;
            position: relative;
        }
        .tip2 span{
            border-bottom: 20px;
            border-left: 8px;
            border-right: 8px;
            border-top: 0;
            border-style: solid;
            border-color:  transparent transparent  burlywood transparent ;
            position: absolute;
            margin: -20px auto;
            left:25px;
        }
    </style>
</head>
<body>
<div class="box1"></div>
<div class="box2"></div>

<!--三角形气泡探索-->

<div class="tip1">
    <div class="tip2">
        <span>
        </span>
        我是气泡提示内容
    </div>
</div>

</body>
</html>
```

>CSS代码

```css
    <style>
        .box1{
            border-top: 150px;
            border-left: 400px;
            border-right: 400px;
            border-bottom: 0px;
            border-style: solid;
            border-color: burlywood transparent transparent transparent ;
        }
        .box2{
            background-color: burlywood;
        }
        .tip1{
            margin: 50px auto;
            width: 200px;
            height: 100px;
            background-color: burlywood;
            border-radius: 15px;
        }
        .tip2{
            width: 200px;
            position: relative;
        }
        .tip2 span{
            border-bottom: 20px;
            border-left: 8px;
            border-right: 8px;
            border-top: 0;
            border-style: solid;
            border-color:  transparent transparent  burlywood transparent ;
            position: absolute;
            margin: -20px auto;
            left:25px;
        }
    </style>
```

### 原理阐释

>&emsp;&emsp;用CSS画出几何图形最简单的原理就是利用`border`各种骚操作，当然，此处还包括`border-style`、`border-color`中的四个颜色属性值。
