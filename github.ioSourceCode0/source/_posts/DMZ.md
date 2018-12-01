---
title: DMZ(demilitarized zone,非军事区)
date: 2018-11-18 15:26:19
tags:
    - DMZ
    - scope
---

## DMZ介绍

> &emsp;&emsp;DMZ是英文“demilitarized zone”的缩写，中文名称为“隔离区”，也称“非军事化区”。它是为了解决安装防火墙后外部网络的访问用户不能访问内部网络服务器的问题，而设立的一个非安全系统与安全系统之间的缓冲区。该缓冲区位于企业内部网络和外部网络之间的小网络区域内。在这个小网络区域内可以放置一些必须公开的服务器设施，如企业Web服务器、FTP服务器和论坛等。另一方面，通过这样一个DMZ区域，更加有效地保护了内部网络。因为这种网络部署，比起一般的防火墙方案，对来自外网的攻击者来说又多了一道关卡。
>
>&emsp;&emsp;这里指的是比ES6块级作用域更加空的作用域。

## DEMO

```javascript

const _  = Object.create(null);

function f() {
    console.log(this);
}
f.call(_);
```

>&emsp;&emsp;定义DMZ的符号一般都是自定义，可以为任意格式，借助到Object.Create()这个方法；将所有的对象以及属性全部囊括在其中，进而达到不污染全局空间的目的。