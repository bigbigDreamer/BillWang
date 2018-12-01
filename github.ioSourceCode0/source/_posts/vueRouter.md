---
title: vue-router
date: 2018-11-07 11:15:43
tags:
 - vue-router
 - vue
 - vue-cli3.0
---

>&emsp;&emsp;关于vue-router，还有一部分知识需要我去回顾。

## 路由传参

### 方法一

```bash
   VM.$router.push({path:'/home/'+id})用来响应
   routes:[
     {
        path:'/home/:id'
     }
       ];
    VM.$route.params.id取值
```

### 方法二

```bash
   VM.$router.push({path:'/home/'+id})用来响应
   routes:[
     {
        path:'/home/?id'
     }
       ];
    VM.$route.query.id取值
```

### 方法三

>&emsp;&emsp;这也是我极力推荐的一种方式。

```bash
   routes: [
       {
         path: '/home',
         name: 'home',
         component: Home
       },
       {
         path: '/about',
         name: 'about',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
         beforeEnter: (to, from, next) => {
           let {name,psd} = to.params;
           if (name === 'admin' && psd === 'admin')
             next();
         }
       }
     ]
     //传参
      this.$router.push({name:'about',params:{
               name:'admin',
               psd:'admin',
               }});
     //取值
     beforeEnter: (to, from, next) => {
             let {name,psd} = to.params;
             if (name === 'admin' && psd === 'admin')
               next();
           }
```

## 小结

>&emsp;&emsp;对于第三种方法，我更青睐于把它放置于路由守卫中做登录判断。