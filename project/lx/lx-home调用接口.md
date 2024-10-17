## 封装axios为http方法

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
## getArtcleList的封装与使用

::: code-group
```sh [调用getArtcleList]
#
const list = ref<ArticleVO[]>([]);

onMounted(() => {
  getArticleList({ pageSize: 10, currentPage: 1 })
    .then((result) => {
      list.value = result.records.map((item) => ({
        id: item.id,
        image: getResourceImage(item.cover, 0),
        title: item.title,
        subtitle: [item.author, item.summary].join(" | "),
        size: "large",
      }));
    })
    .catch((err) => {});
});
```

```sh[ArticleVO接口定义]
#规范类型
export interface ArticleDTO {
  id: string;
  createTime: string;
  title: string;
  author: string;
  publicDate: string;
  cover: string;
  summary: string;
  status: boolean;
}
```

```sh[getArtcleList定义]
定义一个getArticleList
参数类型为ArticleParams也可以没有
返回调用http.get方法返回的结果类型为
Pagination<PublicArticleDTO>，表示分页的公共文章数据。


export const getArticleList = 
(params?: PaginationParams<ArticleParams>) => {
  return http.get<Pagination<ArticleDTO>>("/lx/lxArticle/page", { params });
};
```
```sh[接口集合]
  type PaginationParams<T> = {
    currentPage?: number;
    pageSize?: number;
  } & T;

  export interface ArticleParams {
  field?: string;
  order?: string;
  title?: string;
  author?: string;
  summary?: string;
  status?: boolean;
 }
  type Pagination<T> = {
    records: T[];
    total: number;
    size: number;
    current: number;
    pages: number;
  };
  export interface PublicArticleDTO {
  id: string;
  createTime: string;
  updateTime: string;
  isDel: boolean;
  creator: null;
  updater: string;
  version: number;
  remark: string;
  appmsgid: number;
  cover: string;
  url: string;
  outCreateTime: string;
  title: string;
  status: boolean;
 }
```
:::