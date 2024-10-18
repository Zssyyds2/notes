import{_ as s,c as n,a4 as p,o as e}from"./chunks/framework.D0KwTCVo.js";const d=JSON.parse('{"title":"底部导航Tabbar的配置","description":"","frontmatter":{},"headers":[],"relativePath":"project/lx/lx-tabbar.md","filePath":"project/lx/lx-tabbar.md","lastUpdated":1729165077000}'),l={name:"project/lx/lx-tabbar.md"};function i(r,a,t,b,c,o){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="底部导航tabbar的配置" tabindex="-1">底部导航Tabbar的配置 <a class="header-anchor" href="#底部导航tabbar的配置" aria-label="Permalink to &quot;底部导航Tabbar的配置&quot;">​</a></h1><p>基本所有软件也都有底部导航，可见底部导航的重要性，要创建底部导航，要先配置它的路由表</p><h2 id="页面路由" tabindex="-1">页面路由 <a class="header-anchor" href="#页面路由" aria-label="Permalink to &quot;页面路由&quot;">​</a></h2><p>当它为底部导航栏时</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>      path: &quot;/&quot;,</span></span>
<span class="line"><span>      name: &quot;Home&quot;,</span></span>
<span class="line"><span>      meta: {</span></span>
<span class="line"><span>        index: 1,</span></span>
<span class="line"><span>        isTabbar: true,</span></span>
<span class="line"><span>        title: &quot;首页&quot;,</span></span>
<span class="line"><span>        icon: &quot;home&quot;,</span></span>
<span class="line"><span>        &quot;icon-prefix&quot;: &quot;icon&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      component: HomeView,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>当它为普通路由时,因为路由较多一个一个导入组件命名也会很麻烦，就直接配置里导入</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    {</span></span>
<span class="line"><span>      path: &quot;/home/learn&quot;,</span></span>
<span class="line"><span>      name: &quot;learn-list&quot;,</span></span>
<span class="line"><span>      component: () =&gt; import(&quot;@/views/home/learn/index.vue&quot;),</span></span>
<span class="line"><span>    },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="tabbar的逻辑部分" tabindex="-1">Tabbar的逻辑部分 <a class="header-anchor" href="#tabbar的逻辑部分" aria-label="Permalink to &quot;Tabbar的逻辑部分&quot;">​</a></h2><p>先定义一个判断是否为底部导航的函数，函数传参要求是路由</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function isRouteTabbar(</span></span>
<span class="line"><span>  route: RouteRecordNormalized | RouteLocationNormalizedGeneric</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  return route.meta.isTabbar == true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="获取tabbarlist" tabindex="-1">获取tabbarList <a class="header-anchor" href="#获取tabbarlist" aria-label="Permalink to &quot;获取tabbarList&quot;">​</a></h3><p>计算属性获取路由中定义为底部导航栏的内容整理成数组tabbarList</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const tabbarList = computed(() =&gt; {</span></span>
<span class="line"><span>  const routerList = router.getRoutes();//用于获取当前路由配置中的所有路由记录</span></span>
<span class="line"><span>    //过滤出符合tabbar的元素，并根据他们的meta.index属性进行排序</span></span>
<span class="line"><span>  const tabbarRouter = routerList</span></span>
<span class="line"><span>    .filter((route) =&gt; isRouteTabbar(route))</span></span>
<span class="line"><span>    .sort((a, b) =&gt; (a.meta.index as number) - (b.meta.index as number));</span></span>
<span class="line"><span>  if (tabbarRouter.length &gt; 5) {</span></span>
<span class="line"><span>    throw new Error(&quot;tabbar最多5个&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return tabbarRouter;</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="获取当前激活的tabbar" tabindex="-1">获取当前激活的tabbar <a class="header-anchor" href="#获取当前激活的tabbar" aria-label="Permalink to &quot;获取当前激活的tabbar&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  if (!route) return;</span></span>
<span class="line"><span>  const isTabbar = isRouteTabbar(route);</span></span>
<span class="line"><span>  if (!isTabbar) return;</span></span>
<span class="line"><span>  const index = tabbarList.value.findIndex((item) =&gt; item.path == route.path);</span></span>
<span class="line"><span>  active.value = index;</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="tabbar的组件部分及详细解释" tabindex="-1">Tabbar的组件部分及详细解释 <a class="header-anchor" href="#tabbar的组件部分及详细解释" aria-label="Permalink to &quot;Tabbar的组件部分及详细解释&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;tabbar-wrapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;flex-1&quot;&gt;</span></span>
<span class="line"><span>      &lt;slot /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;van-tabbar v-model=&quot;active&quot; v-bind=&quot;props&quot; active-color=&quot;var(--primary-color)&quot;&gt;</span></span>
<span class="line"><span>      &lt;template v-for=&quot;(item, index) in tabbarList&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>        &lt;van-tabbar-item</span></span>
<span class="line"><span>          :to=&quot;item.path&quot;</span></span>
<span class="line"><span>          :name=&quot;index&quot;</span></span>
<span class="line"><span>          :icon=&quot;(item.meta.icon as string)&quot;</span></span>
<span class="line"><span>          :icon-prefix=&quot;(item.meta[&#39;icon-prefix&#39;] as string)&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>          {{ item.meta.title }}</span></span>
<span class="line"><span>          &lt;!-- &lt;template #icon=&quot;props&quot;&gt;</span></span>
<span class="line"><span>            &lt;img</span></span>
<span class="line"><span>              class=&quot;w-6 !h-6&quot;</span></span>
<span class="line"><span>              :src=&quot;props.active ? item.meta.icon_active : item.meta.icon&quot;</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>          &lt;/template&gt; --&gt;</span></span>
<span class="line"><span>        &lt;/van-tabbar-item&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/van-tabbar&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="最外层的类为tabbar-wrapper的div" tabindex="-1">最外层的类为tabbar-wrapper的div <a class="header-anchor" href="#最外层的类为tabbar-wrapper的div" aria-label="Permalink to &quot;最外层的类为tabbar-wrapper的div&quot;">​</a></h3><p>css的样式为,展现出来的就是一个竖向排列的flex布局，高度为整个屏幕</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.tabbar-wrapper {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  height: 100vh;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>因为会传入slot插槽，所以是竖向布局，每个有底部导航栏的组件都会被<code>&lt;tabbar&gt;</code>包着</p><h3 id="van-tabbar的css" tabindex="-1">van-tabbar的css <a class="header-anchor" href="#van-tabbar的css" aria-label="Permalink to &quot;van-tabbar的css&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.van-tabbar-item {</span></span>
<span class="line"><span>  gap: 4px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.van-tabbar--fixed {</span></span>
<span class="line"><span>  position: sticky;</span></span>
<span class="line"><span>  flex-shrink: 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>将导航栏固定位置，导航栏中的图标和文字间距为4px</p>`,24)]))}const m=s(l,[["render",i]]);export{d as __pageData,m as default};
