# 路由切换
路由切换直接用router难以判断逻辑，因此封装一个go函数来统一判断实现。
```
import router from "@/router";

export function go(path: string | number, isRedirect = false) {
  if (typeof path === "number") {
    router.go(path);//如果path是数字的话，就前进或后退n步
    return;
  }
  if (isRedirect) {
    router.replace({ path });//替换当前的历史记录条目，不会在历史记录中留下新的条目。
  } else {
    router.push({ path });//向历史记录中添加一个新的条目
  }
}

```