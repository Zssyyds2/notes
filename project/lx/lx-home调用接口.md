# 接口调用的规范
## 命名规范
### VO
View Object 视图对象，专门用于前端展示层，专注于表示某个具体的值或对象的对象，包含业务逻辑；VO的作用是将一组数据以适合特定用户界面（UI）的形式封装起来，确保数据的呈现既符合设计要求也满足用户体验标准。
### DTO
Data Transfer Object数据传输对象，侧重于传输数据的对象，不包含业务逻辑；主要在展示层与服务层之间充当媒介，负责数据的标准化传输，确保数据在不同系统或组件间的准确无误传递。
## 布局
在目录src/api/article下新建两个文件:
- index.ts
- model.ts
分别封装 函数规范 和 参数类型规范
::: code-group
```sh [index]
import { http } from "@/utils/http";
import type { ArticleParams, ArticleDTO, PublicArticleDTO } from "./model";

/**
 * @description 获取见闻文章
 * @param params 
 * @returns 
 */
export const getArticleList = (params?: PaginationParams<ArticleParams>) => {
  return http.get<Pagination<ArticleDTO>>("/lx/lxArticle/page", { params });
};

/**
 * @description 获取公众号文章
 * @param params 
 * @returns 
 */
export const getPublicArticleList = (
  params?: PaginationParams<ArticleParams>
) => {
  return http.get<Pagination<PublicArticleDTO>>("/lx/lxArticleWx/page", {
    params,
  });
};

```
```sh [model]
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

export interface ArticleVO {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  size?: string;
}

export interface ArticleParams {
  field?: string;
  order?: string;
  title?: string;
  author?: string;
  summary?: string;
  status?: boolean;
}

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

export interface PublicArticleVO {
  id: string | number;
  image: string;
  title?: string;
  size?: string;
  date?: string;
  shape: "card" | "list";
  line?: boolean;
}
```
:::


## getArtcleList的封装与使用

::: code-group
```sh[getArtcleList定义]
定义一个getArticleList
参数类型为PaginationParams<ArticleParams>也可以没有
返回调用http.get方法返回的结果类型为
Pagination<PublicArticleDTO>，表示分页的公共文章数据。


export const getArticleList = 
(params?: PaginationParams<ArticleParams>) => {
  return http.get<Pagination<ArticleDTO>>("/lx/lxArticle/page", { params });
};
```

```sh[接口集合]
  type PaginationParams<T> = {
    currentPage?: number;//当前有几个
    pageSize?: number;//一共传几个
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
    records: T[];//返回DTO数据传输对象
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

```sh [调用getArtcleList]
#
const list = ref<ArticleVO[]>([]);//定义ViewObject使对象可视化

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
:::