# Vue-Java项目整合总结
#### 作者：王彬林 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   时间：2018.9.18 /AM 8:43
###### 前言：本次自己主要实践了Vue与Java项目整合，下面就主要疑虑作以总结
>项目分析
>>Vue
>>>采用axios发送ajax请求，使用http-proxy-middleware进行跨域处理
>>
>>JavaWeb
>>>采用servlet技术接收前台请求，使用阿里巴巴fastjson处理前台传入json
>
>代码实例
>>axios请求代码
```bash
   watch:{
             status:function () {
               if(this.status ==2){
                 this.$http.post('/api/login',{data:this.form,name:"test"})
                   .then((data)=>{
                     console.log(data)
                   })
                   .catch((err)=>{
                     console.log(err)
                   })
               }
             }
```
>>http-proxy-middleware跨域配置代码                  
```bash
     proxyTable: {
          '/api': {
                  target: 'http://127.0.0.1:8080/Login',
                  changeOrigin: true,
                  pathRewrite: {
                    '^/api': '/api'
                  }
                },
          '/base': {
                  target: 'http://127.0.0.1:3000/',
                  changeOrigin: true,
                  pathRewrite: {
                    '^/base': '/base'
                  }
                }
        }
```
>>JavaServlet处理前台请求配置           
        
 ```bash
 import java.io.BufferedInputStream;
 import java.io.ByteArrayOutputStream;
 import java.io.IOException;
 import java.io.InputStream;
 import java.util.Date;
 
 import javax.servlet.ServletException;
 import javax.servlet.annotation.WebServlet;
 import javax.servlet.http.HttpServlet;
 import javax.servlet.http.HttpServletRequest;
 import javax.servlet.http.HttpServletResponse;
 
 import com.alibaba.fastjson.JSON;
 import com.alibaba.fastjson.JSONObject;
 
 /**
  * Servlet implementation class Login
  */
 @WebServlet("/api/login")
 public class LoginServlet extends HttpServlet {
 	private static final long serialVersionUID = 1L;
        
     /**
      * @see HttpServlet#HttpServlet()
      */
     public LoginServlet() {
         super();
         // TODO Auto-generated constructor stub
     }
 
 	/**
 	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
 	 */
 	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 		// TODO Auto-generated method stub
 		request.setCharacterEncoding("utf-8");
 		response.setContentType("text/html;charset=utf-8");
 		response.setStatus(200);
 		response.getWriter().append("Served at: 我爱你").append(request.getContextPath());
 		//System.out.println(request.getParameter("name"));
 		System.out.println(new Date()+"\n");
 		InputStream sin = new BufferedInputStream(request.getInputStream());
 		ByteArrayOutputStream sout = new ByteArrayOutputStream();
 		int b=0;
 		while((b=sin.read())!=-1)
 		{
 		sout.write(b);
 		}
 		byte[] temp = sout.toByteArray();
 		String s_ok = new String(temp,"UTF-8");
 		JSONObject s = JSON.parseObject(s_ok);
 		JSONObject t = JSON.parseObject(s.getString("data"));
 		System.out.println(t.getString("password"));
 	}
 
 	/**
 	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
 	 */
 	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 		// TODO Auto-generated method stub
 		doGet(request, response);
 	}
 }
 ```
 >重点总结
 >>前后台分离项目的一个主要核心就是数据传输与请求跨域，上面的代码做了最好的实例，如果各位有好的想法或者
 更加新奇的想法，欢迎假如交流。
