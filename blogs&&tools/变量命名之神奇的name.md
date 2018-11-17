# 变量命名之神奇的name
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.25 /PM 18:56
>问题来源：在学习es5初期，进行如下命名数组：
```bash
   在javascript中声明一个数组。
       例如：var name = ['张三','李四','王五']；
             console.log(typeof name);//String
       此处的疑惑就是，var声明的命名是一个数组，但是却识别的是一个字符串。
       之后，我单独做了如下测试：
              console.info(name);//此处打印为空白----在浏览器中，并没有提示'name is not define'
              console.info(typeof name)；//String 
       此处查了多方文档，确定name不是js关键字。
```
>问题原因：
>>在百度无果之后，我选择询问老师，老师给我的解释是：
```bash
 应该是和window.name属性冲突了，在浏览器的全局作用于中本生就有name，是用来 获取/设置窗口的名称，并且默认的是String类型。
```
>>随后，我紧接着做了如下测试：
```bash
     var name = [1,2,3,4,5]
     console.log(name.length)//9
     console.log(window.name.length)//9
    // 毫无疑问老师的答案是对的
```
>>之前的猜测：
```bash
    在利用es6新特性之后，利用let 或者const去声明以name为变量标识名的数组之后，发现显示正常。
       let name = ['张三','李四','王五'];
    或者：
       const name = ['张三','李四','王五'];
```
>确认猜测：
```bash
     * 针对let跟var的区别就是var声明的是全局作用域的变量，而let声明的是局部作用域的变量。
     * var声明变量会不同程度提升变量作用域，而在浏览器的全局属性中name是window的一个窗体命名标识，官方规定为string类型，所以出现
       了诸如上述的错误。
```
>学习一悟：
>>学习一路，我们真正要做的不是去一遍又一遍的改bug,把代码改正确，程序能运行就好，我们需要做的是
如何避免下次再犯，对于知识保持一个浓烈的求知欲，有一股“打破砂锅问到底”的气势，才能在学习知识的
途中真正有所获，有所得。