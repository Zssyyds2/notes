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
## 判断是否切换Tabbar
如果路由不在Tabbar之内切换的话加入css动画
```
function getTransitionName(route: RouteLocationNormalizedLoadedGeneric) {
  let name = "";
  // 如果currentRoute和route都是Tabbar 则不使用动画
  if (lastIsTabbar.value && route.meta.isTabbar) {
  } else {
    name = "slide-fade";
  }
  lastIsTabbar.value = route.meta.isTabbar ? true : false;
  return name;
}
```
## 切换动画
动画效果为左移50%，再逐渐变淡
```
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(50%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
```
## template部分
- v-slot中的Component表示当前匹配的组件，route为当前路由的详细信息
- transition是Vue提供的内置组件，过渡模式为out-in，当前组件退出后，新组件才会进入
- keep-alive是Vue提供的内置组件，用于缓存动态组件，避免频繁销毁创建常用组件
```
 <router-view v-slot="{ Component, route }">
    <transition :name="getTransitionName(route)" mode="out-in">
      <keep-alive include="Home,Read,User">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
```