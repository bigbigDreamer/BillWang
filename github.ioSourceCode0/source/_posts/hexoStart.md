---
title: 从零搭建个人博客
categories:
- 经验	
cover_picture: images/hexostart.jpg
tags:
- Hexo
- github
- Node
- MarkDown
- HTML5
- CSS3
- Less
top: '1'
---

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)

## Some Questions

### Use [Theme](https://hexo.io/zh-cn/docs/themes.html)

```bash
$ git clone 'somePoplureRespoTheme'
```

### Set DIYTheme

 you can update some settings in _confid.yml file.

### Relative your github

```bash
$ npm install hexo-deployer-git --save
```

### Learn some commands

```
//init your project of blogs
$ hexo init yourBlogsName
//generator your project to a static file
$ hexo g
```

## Setting your [Gitment](https://sjq597.github.io/2018/05/18/Hexo-%E4%BD%BF%E7%94%A8Gitment%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD/)

### Create your [GitmentApp](https://github.com/settings/applications/new)plugins

### Create your [Livere](https://www.livere.com/)plugins

 &emsp;&emsp;&emsp;&emsp;<span> 需要注意的是在来必力申请的u_id后边没有那两个等号；</span>

### 开启博文内显示图片

```bash
$ npm  install hexo-asset-image --save
```

```bash
//配置你的_config.yml
post_asset_folder: true
```
### 开启博文内显示emoji表情

```bash
$ npm install hexo-filter-github-emojis --save
```

```bash
//配置你的_config.yml
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:
```

### 开启hexo与git绑定

```bash
deploy:
  type: git
  repo: https://github.com/bigbigDreamer/bigbigDreamer.github.io
  branch: master
```

### 贴上一整套的外部hexo yml配置

```bash
 # Hexo Configuration
 ## Docs: https://hexo.io/docs/configuration.html
 ## Source: https://github.com/hexojs/hexo/

 # Site
 title: BillWang
 subtitle: 故居
 description:
 keywords:
 author: BillWang
 language:
 timezone:

 # URL
 ## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
 url: https://bigbigdreamer.github.io/
 root: /
 permalink: :year/:month/:day/:title/
 permalink_defaults:

 # Directory
 source_dir: source
 public_dir: public
 tag_dir: tags
 archive_dir: archives
 category_dir: categories
 code_dir: downloads/code
 i18n_dir: :lang
 skip_render:

 # Writing
 new_post_name: :title.md # File name of new posts
 default_layout: post
 titlecase: false # Transform title into titlecase
 external_link: true # Open external links in new tab
 filename_case: 0
 render_drafts: false
 post_asset_folder: true
 relative_link: false
 future: true
 highlight:
   enable: true
   line_number: true
   auto_detect: false
   tab_replace:

 # Home page setting
 # path: Root path for your blogs index page. (default = '')
 # per_page: Posts displayed per page. (0 = disable pagination)
 # order_by: Posts order. (Order by date descending by default)
 index_generator:
   path: ''
   per_page: 10
   order_by: -date

 # Category & Tag
 default_category: uncategorized
 category_map:
 tag_map:

 # Date / Time format
 ## Hexo uses Moment.js to parse and display date
 ## You can customize the date format as defined in
 ## http://momentjs.com/docs/#/displaying/format/
 date_format: YYYY-MM-DD
 time_format: HH:mm:ss

 # Pagination
 ## Set per_page to 0 to disable pagination
 per_page: 10
 pagination_dir: page

 # Extensions
 ## Plugins: https://hexo.io/plugins/
 ## Themes: https://hexo.io/themes/
 theme: Cxo

 # Deployment
 ## Docs: https://hexo.io/docs/deployment.html
 deploy:
   type: git
   repo: https://github.com/bigbigDreamer/bigbigDreamer.github.io
   branch: master

 post_wordcount:
   item_text: true
   wordcount: true         # 单篇 字数统计
   min2read: true          # 单篇 阅读时长
   totalcount: true       # 网站 字数统计
   separated_meta: true

```

### 贴上一整套CXO主题 yml配置

```bash
# —————————— Profile —————————— #
# language
language: en
# avatar
avatar: img/assets/alarm.jpg
# author
author: BillWang
# signature
signature: 每个人距离成功都只差一步坚持。
# friends
friends:
  Natalia Tsunako: https://desirefire.github.io/
  七夜: //itzmn.github.io
  elickzhao: http://elickzhao.github.io
  lanyu: https://zhile.io/
# SNS
social:
  email: //1826001146@qq.com
  github: https://github.com/bigbigDreamer
  qq: http://wpa.qq.com/msgrd?v=3&uin=1826001146&site=qq&menu=yes
  rss: /atom.xml

# —————————— Site —————————— #
# title of the site
SEO_title: BillWang's Blog
# main title
main_title: 凌瑶宫
# subtitle
subtitle: 小楼春风，客官莫消得此良辰美景，来此栈中入榻，小憩片刻。
# site haeder image
site_header_image: '/img/intro/index-lg.png'
# post haeder image
post_header_image:
# about image
about_header_image:

# —————————— Indivdual —————————— #
# Miscelaneous
favicon: /img/assets/alarm.ico
# —————————— Option —————————— #
# truncate length of abstracts in index page (the default is 300, there will be no abstruct if you input 0)
truncate_length:
# intro height (the default is 70 percents of the screen)
intro_height: 70
# enable toc
toc: true
# word count & reading time
reading_info: true
# access statistics
count:
  # enable analytics
  # true or flase
  busuanzi: flase
  # baidu code
  baidu:
# Time
# you can modify the timestamp format.
date_format: YYYY-MM-DD
# display created time.
display_created: true
# display updated time, if the post dose not define 'updated', the system modification time will be displayed.
display_updated: true
# copyright
copyright:
  enable: true
  # https://creativecommons.org/
  license: All articles in this blog are licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/3.0">CC BY-NC-SA 3.0</a> unless stating additionally.
# comment
comment:
  # Livere  site: https://livere.com/
  livere_uid:
  # Disqus  site: https://disqus.com/
  disqus_shortname:
  # Changyan  site: http://changyan.kuaizhan.com/
  changyan_appid:
  changyan_conf:
  # Gitment  site: https://github.com/imsun/gitment/
  gitment_owner: 1826001146@qq.com
  gitment_repo: https://github.com/bigbigDreamer/bigbigDreamer.github.io
  gitment_client_id:
  gitment_client_secret:

# —————————— Others —————————— #
# main menu navigation
menu:
  Home: /
  About: /about/
  Archives: /archives/
  Tags: /tags/
# stylesheets loaded in the <head>
stylesheets:
- /css/style.css?v=2018.7.9
- /css/animation.css?v=2018.7.9
# scripts loaded in the end of the body
scripts:
- /js/main.js?v=2018.7.9
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:



```

