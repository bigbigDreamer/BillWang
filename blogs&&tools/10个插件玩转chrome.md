# 十个插件带你玩转chrome
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.2 /AM 10:51

--------------------------------------------------
###### 前言：以往在没有接触编程的时候，接触最多的浏览器无非就是IE浏览器与QQ浏览器，但是对于一个开发者而言chrome别无之一的最佳选择。

-------------------------------------------------------
##### *注意：在下载之前你必须做好两件事：*
##### *1.安装SetUp VPN,这样你才可以在谷歌商店畅通无阻；*
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/setupvpn.gif)
##### *2.安装插件你必须做的就是打开谷歌浏览器的扩展程序中的开发者模式；*
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F.gif)

--------------------------------------------------------------
>十个插件带你玩转chrome，你准备好了吗？
>>[Google翻译](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)
>>>这个插件的作用跟字面意思差不多，无非就是起到一个翻译作用，有时候在阅读外语文档的时候还是蛮有用的。    
>>
>>[Infinity 新标签页](https://chrome.google.com/webstore/detail/infinity-new-tabproductiv/dbfmnekepjoapopniengjbcpnbljalfg)
>>>顾名思义，它是一个管理你的标签页（收藏页）的插件，那时候一开始的我，对于繁多的标签页也是耿耿于怀（因为真的太难受了）。但是这个插件
让我陶醉它的美。   
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/inify.gif)
>>
>>[Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/emliamioobfffbgcfdchabfibonehkme)
>>>一款强大到你惊叹的插件，它可以精准测量网页元素的宽高，你可以试想，当UI给你网页设计原图的时候，你可以先把它放置于一个网页端，之后利用
这个插件进行测量元素宽高比。而不用开启复杂的PS之类的工具，想想都美妙。  
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/pageroule.gif)
>>
>>[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
>>>Vue.js的调试工具，具体细节，相信接触了Vue的小伙伴肯定深有体会哦。
>>>```bash
>>>    ###需要注意的一个细节问题：
>>>    @会有小伙伴发现，安装好的Vue.js devtools无法使用，我们做一下三点微调就可以解决了奥！
>>>    
>>>      1.让你的插件允许访问你的网址；这个设置通常在扩展程序中有。
>>>      
>>>      2.我们需要找到Vue.js devtool插件的安装目录。可以在本站文章chrome插件CRX文件的安装目录中找到插件的安装位置。话说来，我们真找不到插件的安装位置，可以在本地电脑搜索插件的ID：nhdogjmejiglipccpnnnanhbledajbpd。用户可以在插件列表中找到插件的ID,如下图所示。这是我在win8系统上chrome插件的安装位置
>>>        C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Extensions\nhdogjmejiglipccpnnnanhbledajbpd\3.1.2_0
>>>        之后需要做的是：
>>>        将mainfest.json中代码persistent：false，修改成persistent：true
>>>        
>>>      3.在前两步完成之后还有问题的情况下启用：
>>>        调整一下webpack.config.js的代码：如下图所示 
>>>```
>>>  ![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/vue.js.png)
>>
>>[ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp)
>>>一款可以采集网页元素颜色的工具，包含色彩三种格式，当然我更欣赏它的另外一个功能，它可以让开发者自己调节需要的渐变色，之后自动生成代码。   
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/colorpix.gif)
>>
>>[WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm)
>>>字面意思而言，这款插件就是可以让开发者知道，网页用了什么字体，字号多大，字体颜色如何。
>>
>>[JS开发工具箱](https://chrome.google.com/webstore/detail/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E7%AE%B1/mflanociobpenleccopmoanpdbcjcanm)
>>>功能比较强大，软件开发中常用的一些小工具这里都有，非常方便和全面
   字符串编码解码、
   二维码生成、
   加密解密、
   HTML/JS/CSS、
   常用对照表。   
>>
>>[草料二维码](https://chrome.google.com/webstore/detail/%E8%8D%89%E6%96%99%E4%BA%8C%E7%BB%B4%E7%A0%81/moombeodfomdpjnpocobemoiaemednkg)
>>>点击生成当前网址二维码、
   草料二维码插件，实现快速获取二维码。
>>
>>[User-Agent Switcher for Chrome](https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg)
>>>一款提供了相对而言比较齐全的测试环境，具体细节，请自行体会。
>>
>>[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
>>>Postman功能包括：功能强大，使用简单的GUI保存的API请求历史无限的集合，环境，测试和共享使用集合运行器进行自动化测试Web可查看的详细API文档灵活的API监控，用于正常运行时间，性能和准确性模拟服务器， 支持分裂堆栈开发。

-------------------------------------------------------------------------------
###### 结束语：以上就是我所常用的chrome插件，至少它让我感觉到了舒心与快乐，希望对你也有帮助，博客总结不易，希望可以留个star，在你转发的时候请注明出处。