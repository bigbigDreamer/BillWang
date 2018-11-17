# es6--oo编程之面向对象三大特性
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.26 /PM 20:49
>今天给大家讲解一番ES6的OO编程,话不多说，上代码
```bash
   /**
    * @time  2018/9/26 17:03
    * @author  Bill Wang <1826001146@qq.com>
    * @desc  综合复习JS知识点
    * @param
    * @todo
    */
   class Person {
   //父类constructor
       constructor(name, age) {
           this.name = name;
           this.age = age;
       }
   //父类方法
       speak() {
           console.log(`我叫${this.name}`);
       }
   }
   //new一个父类对象
   const white = new Person('白人', 18)
   //尝试重写父类方法
   white.speak = function () {
       console.log(`我今年${this.age}岁`)
   }
   white.speak()
   //子类继承父类
   class black extends Person {
       constructor(name, age) {
           super(name, age);
       }
   //子类重写父类的方法
       speak() {
           console.log(`我叫${this.age}`);
       }
   }
   //实例化一个子类
   const b = new black('lll', 15);
   //断点调试，但是尴尬的是好像没反应
   debugger;
   //调用重写父类的方法
   b.speak()
```
>以上就是我尝试ES6实现OO编程的全过程，至于封装，我能想到的就只有闭包。<br>
>本篇博客持续更新.......