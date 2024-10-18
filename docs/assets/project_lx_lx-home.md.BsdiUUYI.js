import{_ as n,c as a,a4 as p,o as l}from"./chunks/framework.D0KwTCVo.js";const m=JSON.parse('{"title":"Home页面","description":"","frontmatter":{},"headers":[],"relativePath":"project/lx/lx-home.md","filePath":"project/lx/lx-home.md","lastUpdated":1729165077000}'),e={name:"project/lx/lx-home.md"};function i(t,s,r,c,b,u){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="home页面" tabindex="-1">Home页面 <a class="header-anchor" href="#home页面" aria-label="Permalink to &quot;Home页面&quot;">​</a></h1><p>包含的组件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;TabbarWrapper&gt;</span></span>
<span class="line"><span>    &lt;Navbar /&gt;</span></span>
<span class="line"><span>    &lt;van-search</span></span>
<span class="line"><span>      placeholder=&quot;搜索学习资源&quot;</span></span>
<span class="line"><span>      @click=&quot;go(&#39;/home/search&#39;)&quot;</span></span>
<span class="line"><span>      @click-input=&quot;go(&#39;/home/search&#39;)&quot;</span></span>
<span class="line"><span>      @focus=&quot;go(&#39;/home/search&#39;)&quot;</span></span>
<span class="line"><span>      disabled</span></span>
<span class="line"><span>    &gt;&lt;/van-search&gt;</span></span>
<span class="line"><span>    &lt;Swiper /&gt;</span></span>
<span class="line"><span>    &lt;Learn /&gt;</span></span>
<span class="line"><span>    &lt;View /&gt;</span></span>
<span class="line"><span>    &lt;Media /&gt;</span></span>
<span class="line"><span>  &lt;/TabbarWrapper&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="navbar组件" tabindex="-1">Navbar组件 <a class="header-anchor" href="#navbar组件" aria-label="Permalink to &quot;Navbar组件&quot;">​</a></h2><p>因为是公共的因放在components文件夹下</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { go } from &quot;@/utils/go&quot;;</span></span>
<span class="line"><span>// const props = defineProps();</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;van-nav-bar</span></span>
<span class="line"><span>    title=&quot;理响金职&quot;</span></span>
<span class="line"><span>    left-arrow</span></span>
<span class="line"><span>    @click-left=&quot;go(-1)&quot;</span></span>
<span class="line"><span>    :style=&quot;{</span></span>
<span class="line"><span>      &#39;--van-nav-bar-z-index&#39;: 999,</span></span>
<span class="line"><span>      &#39;--van-nav-bar-background&#39;: &#39;var(--primary-color)&#39;,</span></span>
<span class="line"><span>      &#39;--van-nav-bar-icon-color&#39;: &#39;#fff&#39;,</span></span>
<span class="line"><span>      &#39;--van-nav-bar-text-color&#39;: &#39;#fff&#39;,</span></span>
<span class="line"><span>      &#39;--van-nav-bar-title-text-color&#39;: &#39;#fff&#39;,</span></span>
<span class="line"><span>      position: &#39;sticky&#39;,</span></span>
<span class="line"><span>      top: 0,</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>    v-bind=&quot;$attrs&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.van-nav-bar__title {</span></span>
<span class="line"><span>  font-weight: normal;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="swiper组件" tabindex="-1">Swiper组件 <a class="header-anchor" href="#swiper组件" aria-label="Permalink to &quot;Swiper组件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;swiper</span></span>
<span class="line"><span>    class=&quot;swiper&quot;</span></span>
<span class="line"><span>    loop</span></span>
<span class="line"><span>    :autoplay=&quot;{</span></span>
<span class="line"><span>      delay: 3000,</span></span>
<span class="line"><span>      disableOnInteraction: false,</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>    :pagination=&quot;{ clickable: true }&quot;</span></span>
<span class="line"><span>    :centered-slides=&quot;true&quot;</span></span>
<span class="line"><span>    :initialSlide=&quot;2&quot;</span></span>
<span class="line"><span>    slides-per-view=&quot;auto&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;swiper-slide class=&quot;slide&quot; v-for=&quot;item in swiperList&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>      &lt;img :src=&quot;getImageUrl(item.img)&quot; alt=&quot;轮播图&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/swiper-slide&gt;</span></span>
<span class="line"><span>  &lt;/swiper&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.swiper {</span></span>
<span class="line"><span>  .slide {</span></span>
<span class="line"><span>    width: 80%;</span></span>
<span class="line"><span>    transition: all 0.3s;</span></span>
<span class="line"><span>    transform-origin: center center;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .swiper-slide-active {</span></span>
<span class="line"><span>    transform: scale(1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .swiper-slide-next {</span></span>
<span class="line"><span>    transform: scale(0.9);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .swiper-slide-prev {</span></span>
<span class="line"><span>    transform: scale(0.9);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="headertitle组件" tabindex="-1">HeaderTitle组件 <a class="header-anchor" href="#headertitle组件" aria-label="Permalink to &quot;HeaderTitle组件&quot;">​</a></h2><p>为公共组件，可以传入主标题和副标题，并定义函数，运用defineProps，实现父子组件传递</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>defineProps&lt;{</span></span>
<span class="line"><span>  title?: string;</span></span>
<span class="line"><span>  to?: string;</span></span>
<span class="line"><span>  subtitle?: string;</span></span>
<span class="line"><span>  class?: string;</span></span>
<span class="line"><span>}&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const emit = defineEmits([&quot;click&quot;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleClick(e: Event) {</span></span>
<span class="line"><span>  emit(&quot;click&quot;, e);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;flex&quot; :class=&quot;class&quot;&gt;</span></span>
<span class="line"><span>    &lt;h2 class=&quot;text-xl font-bold&quot;&gt;</span></span>
<span class="line"><span>      {{ title }}</span></span>
<span class="line"><span>      &lt;slot /&gt;</span></span>
<span class="line"><span>    &lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;ml-auto&quot; @click=&quot;handleClick&quot;&gt;</span></span>
<span class="line"><span>      &lt;span class=&quot;text-neutral-500 text-base&quot;&gt;{{ subtitle }} &lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="learn组件" tabindex="-1">learn组件 <a class="header-anchor" href="#learn组件" aria-label="Permalink to &quot;learn组件&quot;">​</a></h2><p>内嵌了两个组件:</p><ul><li>HeaderTitle</li><li>LearnItem</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;p-4&quot;&gt;</span></span>
<span class="line"><span>    &lt;HeaderTitle class=&quot;mb-2 px-2&quot; subtitle=&quot;查看全部&quot; @click=&quot;go(&#39;/home/learn&#39;)&quot;</span></span>
<span class="line"><span>      &gt;共学&lt;/HeaderTitle</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;p-4 shadow-md gap-2 flex flex-col rounded-lg&quot;&gt;</span></span>
<span class="line"><span>      &lt;LearnItem</span></span>
<span class="line"><span>        v-for=&quot;(rule,i) in rules&quot;</span></span>
<span class="line"><span>        :id=rule.id</span></span>
<span class="line"><span>        :image=rule.image</span></span>
<span class="line"><span>        :title=rule.title</span></span>
<span class="line"><span>        :subtitle=rule.subtitle</span></span>
<span class="line"><span>        :key=i</span></span>
<span class="line"><span>      /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="learnitem" tabindex="-1">LearnItem <a class="header-anchor" href="#learnitem" aria-label="Permalink to &quot;LearnItem&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;flex gap-2&quot;&gt;</span></span>
<span class="line"><span>    &lt;img</span></span>
<span class="line"><span>      class=&quot;w-16 h-16 rounded flex-shrink-0&quot;</span></span>
<span class="line"><span>      :class=&quot;{ &#39;w-20 h-20&#39;: size === &#39;large&#39; }&quot;</span></span>
<span class="line"><span>      :src=&quot;image&quot;</span></span>
<span class="line"><span>      alt=&quot;&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;flex flex-col justify-around w-0 flex-1&quot;&gt;</span></span>
<span class="line"><span>      &lt;h3</span></span>
<span class="line"><span>        class=&quot;text-base line-clamp-2&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        {{ title }}</span></span>
<span class="line"><span>      &lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;span class=&quot;text-neutral-500 text-sm truncate&quot;&gt;{{ subtitle }}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;my-auto&quot;&gt;</span></span>
<span class="line"><span>      &lt;van-icon size=&quot;32&quot; color=&quot;var(--primary-color)&quot; name=&quot;play-circle-o&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="view组件" tabindex="-1">view组件 <a class="header-anchor" href="#view组件" aria-label="Permalink to &quot;view组件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;p-4&quot;&gt;</span></span>
<span class="line"><span>    &lt;HeaderTitle class=&quot;mb-2 px-2&quot; subtitle=&quot;查看全部&quot; @click=&quot;go(&#39;/home/view&#39;)&quot;</span></span>
<span class="line"><span>      &gt;见闻&lt;/HeaderTitle</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;p-4 shadow-md gap-2 flex flex-col rounded-lg&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;grid grid-cols-2 gap-4&quot;&gt;</span></span>
<span class="line"><span>        &lt;ArticleItem</span></span>
<span class="line"><span>          v-for=&quot;(rule,i) in rules&quot;</span></span>
<span class="line"><span>          :id=&quot;rule.id&quot;</span></span>
<span class="line"><span>          :image=&quot;rule.image&quot;</span></span>
<span class="line"><span>          :title=&quot;rule.title&quot;</span></span>
<span class="line"><span>          :date=&quot;rule.date&quot;</span></span>
<span class="line"><span>          shape=&quot;card&quot;</span></span>
<span class="line"><span>          :key=&quot;i&quot;</span></span>
<span class="line"><span>        /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="articleitem组件" tabindex="-1">ArticleItem组件 <a class="header-anchor" href="#articleitem组件" aria-label="Permalink to &quot;ArticleItem组件&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div</span></span>
<span class="line"><span>    class=&quot;flex gap-2&quot;</span></span>
<span class="line"><span>    :class=&quot;{</span></span>
<span class="line"><span>      &#39;flex-row-reverse&#39;: shape === &#39;list&#39;,</span></span>
<span class="line"><span>      &#39;flex-col&#39;: shape === &#39;card&#39;,</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;img</span></span>
<span class="line"><span>      :src=&quot;image&quot;</span></span>
<span class="line"><span>      alt=&quot;&quot;</span></span>
<span class="line"><span>      class=&quot;rounded-lg&quot;</span></span>
<span class="line"><span>      :class=&quot;{</span></span>
<span class="line"><span>        &#39;aspect-video&#39;: shape == &#39;card&#39;,</span></span>
<span class="line"><span>        &#39;aspect-square&#39;: shape === &#39;list&#39;,</span></span>
<span class="line"><span>        &#39;object-cover&#39;: shape === &#39;card&#39;,</span></span>
<span class="line"><span>        &#39;w-[94px]&#39;: shape === &#39;list&#39;</span></span>
<span class="line"><span>      }&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;div</span></span>
<span class="line"><span>      class=&quot;flex flex-col flex-1 justify-around&quot;</span></span>
<span class="line"><span>      :class=&quot;{</span></span>
<span class="line"><span>        &#39;w-0&#39;: shape == &#39;list&#39;,</span></span>
<span class="line"><span>      }&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;p</span></span>
<span class="line"><span>      class=&quot;text-base&quot;</span></span>
<span class="line"><span>        :class=&quot;{</span></span>
<span class="line"><span>          truncate: shape == &#39;card&#39;,</span></span>
<span class="line"><span>          &#39;line-clamp-2&#39;: shape === &#39;list&#39;,</span></span>
<span class="line"><span>        }&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        {{ title }}</span></span>
<span class="line"><span>      &lt;/p&gt;</span></span>
<span class="line"><span>      &lt;span class=&quot;text-neutral-500 text-sm&quot;&gt;{{ date }}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;van-divider v-if=&quot;line&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="media组件" tabindex="-1">media组件 <a class="header-anchor" href="#media组件" aria-label="Permalink to &quot;media组件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;div class=&quot;p-4&quot;&gt;</span></span>
<span class="line"><span>    &lt;HeaderTitle class=&quot;mb-2 px-2&quot; subtitle=&quot;查看全部&quot; @click=&quot;go(&#39;/home/media&#39;)&quot;</span></span>
<span class="line"><span>      &gt;视听&lt;/HeaderTitle</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;p-4 shadow-md gap-2 flex flex-col rounded-lg&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;grid grid-cols-2 gap-4&quot;&gt;</span></span>
<span class="line"><span>        &lt;ArticleItem</span></span>
<span class="line"><span>          v-for=&quot;(rule,i) in rules&quot;</span></span>
<span class="line"><span>          :id=&quot;rule.id&quot;</span></span>
<span class="line"><span>          :image=&quot;rule.image&quot;</span></span>
<span class="line"><span>          shape=&quot;card&quot;</span></span>
<span class="line"><span>          :key=&quot;rule.key&quot;</span></span>
<span class="line"><span>        /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,23)]))}const d=n(e,[["render",i]]);export{m as __pageData,d as default};
