# Home页面
包含的组件
```
  <TabbarWrapper>
    <Navbar />
    <van-search
      placeholder="搜索学习资源"
      @click="go('/home/search')"
      @click-input="go('/home/search')"
      @focus="go('/home/search')"
      disabled
    ></van-search>
    <Swiper />
    <Learn />
    <View />
    <Media />
  </TabbarWrapper>
```
## Navbar组件
因为是公共的因放在components文件夹下
```
<script setup lang="ts">
import { go } from "@/utils/go";
// const props = defineProps();
</script>
<template>
  <van-nav-bar
    title="理响金职"
    left-arrow
    @click-left="go(-1)"
    :style="{
      '--van-nav-bar-z-index': 999,
      '--van-nav-bar-background': 'var(--primary-color)',
      '--van-nav-bar-icon-color': '#fff',
      '--van-nav-bar-text-color': '#fff',
      '--van-nav-bar-title-text-color': '#fff',
      position: 'sticky',
      top: 0,
    }"
    v-bind="$attrs"
  />
</template>

<style lang="scss">
.van-nav-bar__title {
  font-weight: normal;
}
</style>
```
## Swiper组件
```
<template>
  <swiper
    class="swiper"
    loop
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{ clickable: true }"
    :centered-slides="true"
    :initialSlide="2"
    slides-per-view="auto"
  >
    <swiper-slide class="slide" v-for="item in swiperList" :key="item.id">
      <img :src="getImageUrl(item.img)" alt="轮播图" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  .slide {
    width: 80%;
    transition: all 0.3s;
    transform-origin: center center;
  }
  .swiper-slide-active {
    transform: scale(1);
  }

  .swiper-slide-next {
    transform: scale(0.9);
  }

  .swiper-slide-prev {
    transform: scale(0.9);
  }
}
</style>
```
## HeaderTitle组件
为公共组件，可以传入主标题和副标题，并定义函数，运用defineProps，实现父子组件传递
```
<script lang="ts" setup>
defineProps<{
  title?: string;
  to?: string;
  subtitle?: string;
  class?: string;
}>();

const emit = defineEmits(["click"]);

function handleClick(e: Event) {
  emit("click", e);
}
</script>

<template>
  <div class="flex" :class="class">
    <h2 class="text-xl font-bold">
      {{ title }}
      <slot />
    </h2>
    <div class="ml-auto" @click="handleClick">
      <span class="text-neutral-500 text-base">{{ subtitle }} </span>
    </div>
  </div>
</template>
```
## learn组件
内嵌了两个组件:
- HeaderTitle
- LearnItem
```
<template>
  <div class="p-4">
    <HeaderTitle class="mb-2 px-2" subtitle="查看全部" @click="go('/home/learn')"
      >共学</HeaderTitle
    >
    <div class="p-4 shadow-md gap-2 flex flex-col rounded-lg">
      <LearnItem
        v-for="(rule,i) in rules"
        :id=rule.id
        :image=rule.image
        :title=rule.title
        :subtitle=rule.subtitle
        :key=i
      />
    </div>
  </div>
</template>
```
### LearnItem
```
<template>
  <div class="flex gap-2">
    <img
      class="w-16 h-16 rounded flex-shrink-0"
      :class="{ 'w-20 h-20': size === 'large' }"
      :src="image"
      alt=""
    />
    <div class="flex flex-col justify-around w-0 flex-1">
      <h3
        class="text-base line-clamp-2"
      >
        {{ title }}
      </h3>
      <span class="text-neutral-500 text-sm truncate">{{ subtitle }}</span>
    </div>
    <div class="my-auto">
      <van-icon size="32" color="var(--primary-color)" name="play-circle-o" />
    </div>
  </div>
</template>
```
## view组件
```
<template>
  <div class="p-4">
    <HeaderTitle class="mb-2 px-2" subtitle="查看全部" @click="go('/home/view')"
      >见闻</HeaderTitle
    >
    <div class="p-4 shadow-md gap-2 flex flex-col rounded-lg">
      <div class="grid grid-cols-2 gap-4">
        <ArticleItem
          v-for="(rule,i) in rules"
          :id="rule.id"
          :image="rule.image"
          :title="rule.title"
          :date="rule.date"
          shape="card"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>
```
### ArticleItem组件
```
<template>
  <div
    class="flex gap-2"
    :class="{
      'flex-row-reverse': shape === 'list',
      'flex-col': shape === 'card',
    }"
  >
    <img
      :src="image"
      alt=""
      class="rounded-lg"
      :class="{
        'aspect-video': shape == 'card',
        'aspect-square': shape === 'list',
        'object-cover': shape === 'card',
        'w-[94px]': shape === 'list'
      }"
    />
    <div
      class="flex flex-col flex-1 justify-around"
      :class="{
        'w-0': shape == 'list',
      }"
    >
      <p
      class="text-base"
        :class="{
          truncate: shape == 'card',
          'line-clamp-2': shape === 'list',
        }"
      >
        {{ title }}
      </p>
      <span class="text-neutral-500 text-sm">{{ date }}</span>
    </div>
  </div>
  <van-divider v-if="line" />
</template>
```
## media组件
```
  <div class="p-4">
    <HeaderTitle class="mb-2 px-2" subtitle="查看全部" @click="go('/home/media')"
      >视听</HeaderTitle
    >
    <div class="p-4 shadow-md gap-2 flex flex-col rounded-lg">
      <div class="grid grid-cols-2 gap-4">
        <ArticleItem
          v-for="(rule,i) in rules"
          :id="rule.id"
          :image="rule.image"
          shape="card"
          :key="rule.key"
        />
      </div>
    </div>
  </div>
```