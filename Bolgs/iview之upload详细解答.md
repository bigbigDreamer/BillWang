# iview之upload详细解答
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.10.22 /PM 21:09

>前言：今天在带徒弟做一个文件上传的功能的时候，利用到了iview中的upload组件，对于里面的action与name作以下提醒。

-----------------------------------------------------------------

>install vue/iview/express

```bash
    cnpm i vue -g
    cnpm i iview -S
    cnpm i express-generator -g
```
>create project

```bash
    vue init webpack client
    express -e server
```
>iview组件使用

```bash
    <Upload action="//jsonplaceholder.typicode.com/posts/"
               name='fileName'
    >
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
```
>参数解析
>>这里的action指的是地址值，相当于ajax中的url;
>
>>这里的name指的是`<input type = 'file' name = 'fileName'>`中的name.
>配置代理
>>同样的，你需要在config的indexjs中需要配置跨域代理，因为上传文件同样需要代理，记得upload默认post形式。