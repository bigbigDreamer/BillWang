---
title: vue @cli3.0的配置
date: 2018-11-05 09:44:28
categories:
- Vue
tags:
 - Vue
 - webpack
 - vue @cli3.0
cover_picture: images/vue.png
---
## 开心一刻

>&emsp;&emsp;“兜兜转转朝花夕拾却已迟，寻寻觅觅醉生梦死又一世......”，正在写博客的我，情不自禁地哼起了这首歌。:innocent:，好啦，咱们切入正题吧，今天为大家详细解述Vue @cli3.0自动化目录中`vue.config.js`配置。

## Vue @cli 3.0

### 概述

>&emsp;&emsp;Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

### 安装

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 项目创建

```bash
# 注意，这个project的名字必须全为小写
$ vue create project
```
### UI使用

```bash
$ vue ui
```

### DEV start&build

```
# dev start
$ cnpm run serve
# dev build
$ cnpm run build
```

### 拉取Vue cli 2.x？

>&emsp;&emsp;你可能还是比较习惯Vue cli2.x的使用，习惯`vue init webpack xxx`。

```bash
$ npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
$ vue init webpack my-project
```

### 配置`vue.config.js`

>&emsp;&emsp;创建在项目根目录。

```bash
module.exports = {
  //判断是否为生产环境
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : './',
  //定义输出目录
  outputDir:'dist',
  //定义静态资源目录
  assetsDir:'production-sub-path',
  //定义主入口
  indexPath:'index.html',
  //是否允许文件名hash处理
  filenameHashing:true,
  //所有目录的主目录均设置index为入口
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  //是否允许单独提取CSS
  css: {
    modules: false,
    extract:false,
    //加载配置
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
  }
},
  //定义webpack启动
  devServer: {
    //是否进行主机检查，一般这个在进行内网映射的时候设置
    disableHostCheck: true,
    //定义服务器启动端口
    port: 8089, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    //定义热启动
    hot: true,
  }
}

```

