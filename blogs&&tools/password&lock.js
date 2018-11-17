/**
 * @time  2018/9/28 23:32
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  探究加解密
 * @param   escape()与unescape()函数
 * @todo
 */
//toUnicode全局静态编码
let content = `我是加密测试内容`;
//加密
let es = escape(content);
console.info(escape(content));
//解密
console.info(unescape(es));