---
title: vue生产环境与开发环境跨域详解
date: 2018-11-23 09:23:01
categories:
- Vue
tags:
  - 跨域
  - vue
  - 开发环境
  - 生产环境
  - nginx
cover_picture: images/Node.png
---

## 前言

>&emsp;&emsp;不是我吐槽某度娘与某CSDN上的一些博主，解决问题要么写全，要么就不写，模棱两可，我能理解为误人子弟吗？废话不多说，现在就开始进行详细解析。

## Vue开发环境跨域(Vue cli3.0示例)

### vue.config.js配置

```javascript
module.exports = {
    proxy:{
         '/api': {
                 target: 'your serve ip',
                 changeOrigin: true,
                 pathRewrite: {
                   '^/api': '/api'
                 }
               },
        }
      }
  }
}

```

### axios编码规范

```javascript
 this.$ajax.post('/api/findAll')
                .then((data) => {
                    this.typeData = data.data;
                    // console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
```

### 原理解析

>&emsp;&emsp;vue.config.js支持这样配置是因为webpack4.0中devServer中加载了一个`http-middleware-proxy`的库，它的具体配置，官网有详细文档，这里不做解释。

>&emsp;&emsp;注意：这个仅仅支持开发环境下的跨域，所以只能做开发环境下的调试，但对于生产环境，它是无能为力的。

## Vue生产环境跨域(nginx反向代理示例)

### nginx安装

>[官网下载](http://nginx.org/en/download.html)

>[博客传送门](someDetails/nginx-1.8.0.zip)

### 发布vue dist文件

>把打包好的dist文件中的子文件全部copy出来，放在nginx的html目录下，服务器启动后会自动进入index目录。

### nginx.conf配置

>serve域下配置location

```bash
     location / {
               root   html;
               index  index.html index.htm;
   		       add_header 'Access-Control-Allow-Origin' '*';
   			   proxy_pass your serve ip/;
   			        }

```

### 其他跨域解决方案

>jsonp、cors这两种，后者属于服务器端进行处理，这里不做介绍，读者自行了解。

## Nginx之未知名Bug

### Bug描述

>&emsp;&emsp;有时候你会遇到这个问题，不要慌，我也遇到了，我们会解决它。
```bash
 Whitelabel Error Page
 This application has no explicit mapping for /error, so you are seeing this as a fallback.

 Fri Aug 18 13:01:46 CST 2017
 There was an unexpected error (type=Not Found, status=404).
 No message available
```

### Bug解决

> - 第一步：在nginx.conf中删除location那部分内容。
> - 第二步：在windows资源管理器中干掉后台nginx32位任务。
> - 第三步：重新访问，会出现`welcome nginx`,注意：这一步必须严格执行！！！
> - 第四步：重新写入你在第一步删除的内容。
> - 第五步：重复步骤二与步骤三。
> - 第六步：Bug解决！

>&emsp;&emsp;无语吗？确实，我也挺无语的，但是，问题解决了不是吗？

## 小结

>&emsp;&emsp;现在，最基本的问题已经解决了，如果有配置上的其他问题，欢迎留言，我看到会及时回复大家。