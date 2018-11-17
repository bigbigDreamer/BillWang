# todo_list小练习
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.8 /PM 19:43

-------------------------------------------------------------------------
###### 前言：复习非脚手架Vue写法，以及正则表达式
>第一步：引入Vue.min.js

```bash
      cnpm  i vue
     <script src="js/vue.min.js"></script>
```
>
>第二步：创建Vue实例

```bash
    window.onload = function () {
               new Vue({
                   el: '#app',
                   data: {
                       content: '',
                       lists: [
                           '今日头条',
                           '搜狐视频',
                           '腾讯视频',
                           'QQ浏览器',
                       ],
                       newList: []
                   },
               })
           }
```
>第三步：思路透析
>>首先一个功能的实现是需要一个思想的支撑，才可以进行下一步的任务。我的思想就是，在遍历datalist的值的时候，
用v-model的输入值去匹配item，然后利用正则的test函数的返回值控制options的显示与隐藏，可以达到数据双向绑定的一个效果。

```bash
   <div id="app">
       <span>TODO-List小练习</span>
       <br>
       <input type="text" v-model='content' list="cars">
       <datalist id="cars">
           <option v-for="(item,index) in lists" :value="item" :keys='index' v-show="/content/.test(item)"
                   :style="{color:'red'}">
       </datalist>
   </div>
```
>[演示地址](Tools/todolist)
