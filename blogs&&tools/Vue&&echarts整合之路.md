# Vue&&echarts整合之路
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.30 /AM 10:25

--------------------------------------------------------------
### 前言：
>由于已经接触了Vue，所以对于数据可视化还是蛮感兴趣的，今天就来尝试一番echarts和Vue的项目整合之路，
以及相关的数据动态渲染问题的解决思路，话不多说，代码走起。
---------------------------------------------------------------
>Vue(main.js)配置               

```bash
    // The Vue build version to load with the `import` command
    // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
    import Vue from 'vue'
    import App from './App'
    //import router from './router'
    import store from './store'
    import echarts from 'echarts'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    
    Vue.use(BootstrapVue);
    Vue.prototype.$echarts = echarts;
    Vue.config.productionTip = false
    
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
     // router,
      store,
      components: { App },
      template: '<App/>',
    })
    
```
>echarts配置渲染                  
```bash
  let myChart = this.$echarts.init(document.getElementById('app'));
        let options = ({
          title: {
            text: '工大编程语言使用分析柱状图'
          },
          tooltip: {},
          xAxis: {
            data: ['Java', 'JavaScript', 'Python', 'Ruby', 'Html', 'Css']
          },
          yAxis: {},
          series: [{
            name: '使用量',
            type: 'bar',
            data: [this.Java, this.JavaScript, this.Python, this.Ruby, this.Html, this.Css]
          }]
        });
        myChart.setOption(options);
```
>App.Vue部分代码    
                               
```bash
   <template>
     <b-row>
       <b-col fluid cols="8">
         <b-card>
           <div id="app" :style="{width:100 + '%' ,height:400 + 'px'}">
           </div>
         </b-card>
       </b-col>
       <b-col fluid cols="4">
         <b-card>
           <b-img :src="require('./assets/logo.png')">
           </b-img>
           <b-button-group class="mx-1">
             <b-btn @click="updateData({
               Java: 65,
               JavaScript: 55,
               Python: 150,
               Ruby: 52,
               Html:52,
               Css: 59,
             })">Java
             </b-btn>
             <b-btn @click="updateData({
               Java: 60,
               JavaScript: 59,
               Python: 120,
               Ruby: 48,
               Html:47,
               Css: 36,
             })">JavaScript</b-btn>
             <b-btn @click="updateData({
               Java: 65,
               JavaScript: 55,
               Python: 110,
               Ruby: 52,
               Html:52,
               Css: 59,
             })">Python</b-btn>
           </b-button-group>
           <hr>
           <b-button-group class="mx-1">
             <b-btn
               @click="updateData({
               Java: 58,
               JavaScript: 42,
               Python: 90,
               Ruby: 2,
               Html:32,
               Css: 29,
             })"
             >Ruby</b-btn>
             <b-btn
               @click="updateData({
               Java: 38,
               JavaScript: 22,
               Python: 160,
               Ruby: 24,
               Html:62,
               Css: 19,
             })"
             >Html</b-btn>
             <b-btn
               @click="updateData({
               Java: 98,
               JavaScript: 32,
               Python: 110,
               Ruby: 29,
               Html:32,
               Css: 18,
             })"
             >Css</b-btn>
           </b-button-group>
         </b-card>
       </b-col>
     </b-row>
   </template>
   
   <script>
     import {mapState, mapActions} from 'vuex'
   
     export default {
       name: 'App',
       mounted() {
         let myChart = this.$echarts.init(document.getElementById('app'));
         let options = ({
           title: {
             text: '工大编程语言使用分析柱状图'
           },
           tooltip: {},
           xAxis: {
             data: ['Java', 'JavaScript', 'Python', 'Ruby', 'Html', 'Css']
           },
           yAxis: {},
           series: [{
             name: '使用量',
             type: 'bar',
             data: [this.Java, this.JavaScript, this.Python, this.Ruby, this.Html, this.Css]
           }]
         });
         myChart.setOption(options);
       },
       computed: {
         ...mapState([
           'Java',
           'JavaScript',
           'Python',
           'Ruby',
           'Html',
           'Css',
         ])
       },
       methods: {
         ...mapActions([
           'updateData'
         ])
       },
       watch: {
         Css: function () {
           let myChart = this.$echarts.init(document.getElementById('app'));
           let options = ({
             title: {
               text: '工大编程语言使用分析柱状图（echarts牛刀小试）'
             },
             tooltip: {},
             xAxis: {
               data: ['Java', 'JavaScript', 'Python', 'Ruby', 'Html', 'Css']
             },
             yAxis: {},
             series: [{
               name: '使用量',
               type: 'bar',
               data: [this.Java, this.JavaScript, this.Python, this.Ruby, this.Html, this.Css]
             }]
           });
           myChart.setOption(options);
         }
       },
       data() {
         return {}
       }
     }
   </script>
   <style>
   </style>
```
>技术栈
>>- BootStrap-Vue前端UI框架
>>- Vuex(Vue状态管理机)
>>- echarts(百度数据可视化图表库)
>>- Vue-cli(V2.9.6)
>
>注意事项
>>- 引入echarts  
                            
  ```bash
    cnpm i echarts -S
    import echarts from 'echarts'
    Vue.prototype.$echarts = echarts;
  ```
>>- 使用echarts    
                     
  ```bash
      let myChart = this.$echarts.init(document.getElementById('app'));
           let options = ({
             title: {
               text: '工大编程语言使用分析柱状图'
             },
             tooltip: {},
             xAxis: {
               data: ['Java', 'JavaScript', 'Python', 'Ruby', 'Html', 'Css']
             },
             yAxis: {},
             series: [{
               name: '使用量',
               type: 'bar',
               data: [this.Java, this.JavaScript, this.Python, this.Ruby, this.Html, this.Css]
             }]
           });
           myChart.setOption(options);
  ```
>>- 使用问题
>>  - 问题描述：配置信息无误，但是图表不出来<br>
>>  - 解决思路：给目的表格输出区域给定大小才可显示                            
>>     ```
>>         <b-col fluid cols="8">
>>                <b-card>
>>                  <div id="app" :style="{width:100 + '%' ,height:400 + 'px'}">
>>                  </div>
>>                </b-card>
>>             </b-col>
>>     ```
>>- Vuex配置动态数据                              
```bash
   //state.js
   export default {
     Java: 65,
     JavaScript: 5,
     Python: 10,
     Ruby: 2,
     Html: 2,
     Css: 9,
   }
```
----------------------------------------------------------------
```bash
   //mutations.js
   //创建更新数据的方法，利用vuex负载payload
   export default {
     updateData(state,payload){
        state.Java = payload.Java;
        state.JavaScript = payload.JavaScript;
        state.Python = payload.Python;
        state.Ruby = payload.Ruby;
        state.Html = payload.Html;
        state.Css = payload.Css;
     }
   }
```
--------------------------------------------------------
```bash
   //actions.js
   //通过actions提交数据，提交给mutations进行state更新
   export default {
     updateData({commit},{Java,JavaScript,Python,Ruby,Html,Css}){
        commit('updateData',{Java,JavaScript,Python,Ruby,Html,Css})
     }
   }
```
-----------------------------------------------------------------------------
```bash
   //index.js
   //引入所有的配置，创建store目录
   import Vue from 'vue'
   import Vuex from 'vuex'
   import state from './state'
   import mutations from './mutations'
   import actions from './actions'
   Vue.use(Vuex)
   
   export default new Vuex.Store({
     state,//状态
     mutations,
     actions,
   })
```
###### @注意：此处引入配置必须加“./”来配置当前的相对目录，不可以直接“state”,否则会报错

---------------------------------------------------------------
>>- 动态更新数据的若干事宜
>>  - 方法传参示例                              
>>    ```
>>    @click="updateData({
>>             Java: 65,
>>             JavaScript: 55,
>>             Python: 150,
>>             Ruby: 52,
>>             Html:52,
>>             Css: 59,
>>           })
>>    ```
>>   - 组件引入vuex示例
>>     ```bash
>>      //通过解构赋值引入vuex的对象，此处使用的是数组进行参数获取。
>>        import {mapState, mapActions} from 'vuex'
>>          computed: {
>>                ...mapState([
>>                  'Java',
>>                  'JavaScript',
>>                    'Python',
>>                    'Ruby',
>>                    'Html',
>>                    'Css',
>>                  ])
>>                },
>>                methods: {
>>                  ...mapActions([
>>                    'updateData'
>>                  ])
>>                },
>>     ```
>>   - 数据动态渲染问题
>>     - 问题描述：计划在组件挂载之前做页面图表动态渲染，所以我采用的方案是在mounted钩子函数中进行渲染
，也就是在组件挂载完毕之后进行数据初始化渲染，在vuex中获取每个state对象进行数据渲染。但是当数据发生动态改变的时候
发现根本没办法修改图标中的数据，我遇到的是数据在vuex状态中已经改变了数据，但是无法在页面中进行数据更新。
>>   - 问题解决
>>     - 首先在mounted钩子函数中进行数据图表的初始化渲染，之后对于图表的动态更新完全可以在watch钩子函数中进行渲染表示
，可以先检测要变化的数据，按照官方文给出的例子，进行数据渲染。废话不多说，咱们来看demo。
```bash
//在这里，我的思路就是通过检测一个state值的变化来深度检测整个数据变化，之后进行而此次echarts渲染
      watch: {
           Css: function () {
             let myChart = this.$echarts.init(document.getElementById('app'));
             let options = ({
               title: {
                 text: '工大编程语言使用分析柱状图（echarts牛刀小试）'
               },
               tooltip: {},
               xAxis: {
                 data: ['Java', 'JavaScript', 'Python', 'Ruby', 'Html', 'Css']
               },
               yAxis: {},
               series: [{
                 name: '使用量',
                 type: 'bar',
                 data: [this.Java, this.JavaScript, this.Python, this.Ruby, this.Html, this.Css]
               }]
             });
             myChart.setOption(options);
           }
       },
```
----------------------------------------------------------------------
###### 今天的总结就到这里，还是老台词，我是沐沐，我为自己代言，加油加油再加油!!!
### 项目图片实例
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/_XHBZJA%40%40Z%24IH2G%5BZWGBVNT.png)
### 动态演示
![alt](https://github.com/bigbigDreamer/TheDiaryBook/blob/master/blogs%26%26tools/echarts.gif)

