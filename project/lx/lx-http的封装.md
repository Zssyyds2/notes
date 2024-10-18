# 封装网络请求
##  .env文件
在.env文件中定义环境变量,Vite 会自动加载 .env 文件中的环境变量，并将其暴露给应用程序。你可以在代码中通过 import.meta.env 访问这些变量
```
VITE_APP_API_URL=http://8.141.85.107:8080/
VITE_APP_RESOURCE_URL=http://43.142.135.84:9000/
```
## 封装axios为http方法
在src/utils下新建http.js
::: code-group
```sh [创建实例]
#创建axios的实例
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 10000,
});
```
```sh [请求拦截器]
#这行代码是在请求的headers中添加了一个自定义字段zztoken，其值为Authorization.Token。
#添加token后所有数据返回

http.interceptors.request.use((config) => {
  config.headers["zztoken"] = Authorization.Token;
  return config;
});
```
```sh [响应拦截器]
#响应成功状态码返回数据，失败抛出错误
http.interceptors.response.use(
  (response) => {
    if (response.data.code === HttpCode.Success) {
      return response.data.data;
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```
:::