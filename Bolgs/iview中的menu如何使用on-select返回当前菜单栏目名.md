# iview中的menu如何使用on-select返回当前菜单栏目名
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.14 /PM 15:31
>前言：今天在做后台管理系统中用到iview框架中的menu，所以尝试路由跳转时用到组件的方法on-select

-----------------------------------------------------------------

```bash
   //HTML代码
     <Menu mode="horizontal" theme="dark" active-name="1" @on-select="roleClick">
             <div class="layout-logo"><strong>Catering</strong></div>
             <div class="layout-nav">
               <MenuItem name="role" >
                 <Icon type="ios-navigate" ></Icon>
                 权限分配
               </MenuItem>
               <MenuItem name="2">
                 <Icon type="ios-keypad"></Icon>
                 资源管理
               </MenuItem>
               <MenuItem name="3">
                 <Icon type="ios-analytics"></Icon>
                 暂待讨论
               </MenuItem>
               <MenuItem name="4">
                 <Icon type="ios-paper"></Icon>
                 暂待讨论
               </MenuItem>
             </div>
           </Menu>

```
>注意：此时的on-select是写在menu中的

```bash
    //在JS中定义
     methods:{
            roleClick(name){
              alert(name);
              this.$router.push({path:`admin/${name}`});
            },

```
>结束语：最后，问题解决，亲测有用。
