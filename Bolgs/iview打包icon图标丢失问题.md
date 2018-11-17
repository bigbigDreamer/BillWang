# iview打包icon图标丢失问题
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.5 /PM 21:33

-------------------------------------------------------------------
###### 前言：就关于iview UI框架在Vue cli打包下icon图标丢失作以总结

---------------------------------------------------
>解决思路
>
>>找到build/webpack.prod.conf.js 文件下，一般这个文件只有在Vue cli3.0以下版本才会有

```bash
   module: {
       rules: utils.styleLoaders({
         sourceMap: config.build.productionSourceMap,
         //修改这个地方为false,原来为true
         extract: false
       })
     },

```
>小结
>>问题解决，有没有感觉很开心呀!