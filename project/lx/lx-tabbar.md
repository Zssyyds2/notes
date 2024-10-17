# 底部导航Tabbar的配置
基本所有软件也都有底部导航，可见底部导航的重要性，要创建底部导航，要先配置它的路由表
## 页面路由
当它为底部导航栏时
```
{
      path: "/",
      name: "Home",
      meta: {
        index: 1,
        isTabbar: true,
        title: "首页",
        icon: "home",
        "icon-prefix": "icon",
      },
      component: HomeView,
}
```
当它为普通路由时,因为路由较多一个一个导入组件命名也会很麻烦，就直接配置里导入
```
    {
      path: "/home/learn",
      name: "learn-list",
      component: () => import("@/views/home/learn/index.vue"),
    },
```
## Tabbar的逻辑部分
先定义一个判断是否为底部导航的函数，函数传参要求是路由
```
function isRouteTabbar(
  route: RouteRecordNormalized | RouteLocationNormalizedGeneric
) {
  return route.meta.isTabbar == true;
}
```
### 获取tabbarList
计算属性获取路由中定义为底部导航栏的内容整理成数组tabbarList
```
const tabbarList = computed(() => {
  const routerList = router.getRoutes();//用于获取当前路由配置中的所有路由记录
    //过滤出符合tabbar的元素，并根据他们的meta.index属性进行排序
  const tabbarRouter = routerList
    .filter((route) => isRouteTabbar(route))
    .sort((a, b) => (a.meta.index as number) - (b.meta.index as number));
  if (tabbarRouter.length > 5) {
    throw new Error("tabbar最多5个");
  }
  return tabbarRouter;
});
```
### 获取当前激活的tabbar
```
watchEffect(() => {
  if (!route) return;
  const isTabbar = isRouteTabbar(route);
  if (!isTabbar) return;
  const index = tabbarList.value.findIndex((item) => item.path == route.path);
  active.value = index;
});
```
## Tabbar的组件部分及详细解释
```
<div class="tabbar-wrapper">
    <div class="flex-1">
      <slot />
    </div>
    <van-tabbar v-model="active" v-bind="props" active-color="var(--primary-color)">
      <template v-for="(item, index) in tabbarList" :key="index">
        <van-tabbar-item
          :to="item.path"
          :name="index"
          :icon="(item.meta.icon as string)"
          :icon-prefix="(item.meta['icon-prefix'] as string)"
        >
          {{ item.meta.title }}
          <!-- <template #icon="props">
            <img
              class="w-6 !h-6"
              :src="props.active ? item.meta.icon_active : item.meta.icon"
            />
          </template> -->
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
```

### 最外层的类为tabbar-wrapper的div
css的样式为,展现出来的就是一个竖向排列的flex布局，高度为整个屏幕
```
.tabbar-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
```
因为会传入slot插槽，所以是竖向布局，每个有底部导航栏的组件都会被`<tabbar>`包着

### van-tabbar的css
```
.van-tabbar-item {
  gap: 4px;
}

.van-tabbar--fixed {
  position: sticky;
  flex-shrink: 0;
}
```
将导航栏固定位置，导航栏中的图标和文字间距为4px