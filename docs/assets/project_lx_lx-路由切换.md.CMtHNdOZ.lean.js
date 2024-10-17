import{_ as a,c as n,a4 as e,o as p}from"./chunks/framework.D0KwTCVo.js";const m=JSON.parse('{"title":"路由切换","description":"","frontmatter":{},"headers":[],"relativePath":"project/lx/lx-路由切换.md","filePath":"project/lx/lx-路由切换.md","lastUpdated":null}'),l={name:"project/lx/lx-路由切换.md"};function i(r,s,t,c,o,b){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="路由切换" tabindex="-1">路由切换 <a class="header-anchor" href="#路由切换" aria-label="Permalink to &quot;路由切换&quot;">​</a></h1><p>路由切换直接用router难以判断逻辑，因此封装一个go函数来统一判断实现。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import router from &quot;@/router&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function go(path: string | number, isRedirect = false) {</span></span>
<span class="line"><span>  if (typeof path === &quot;number&quot;) {</span></span>
<span class="line"><span>    router.go(path);//如果path是数字的话，就前进或后退n步</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (isRedirect) {</span></span>
<span class="line"><span>    router.replace({ path });//替换当前的历史记录条目，不会在历史记录中留下新的条目。</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    router.push({ path });//向历史记录中添加一个新的条目</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="判断是否切换tabbar" tabindex="-1">判断是否切换Tabbar <a class="header-anchor" href="#判断是否切换tabbar" aria-label="Permalink to &quot;判断是否切换Tabbar&quot;">​</a></h2><p>如果路由不在Tabbar之内切换的话加入css动画</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function getTransitionName(route: RouteLocationNormalizedLoadedGeneric) {</span></span>
<span class="line"><span>  let name = &quot;&quot;;</span></span>
<span class="line"><span>  // 如果currentRoute和route都是Tabbar 则不使用动画</span></span>
<span class="line"><span>  if (lastIsTabbar.value &amp;&amp; route.meta.isTabbar) {</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    name = &quot;slide-fade&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  lastIsTabbar.value = route.meta.isTabbar ? true : false;</span></span>
<span class="line"><span>  return name;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="切换动画" tabindex="-1">切换动画 <a class="header-anchor" href="#切换动画" aria-label="Permalink to &quot;切换动画&quot;">​</a></h2><p>动画效果为左移50%，再逐渐变淡</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.slide-fade-enter-active,</span></span>
<span class="line"><span>.slide-fade-leave-active {</span></span>
<span class="line"><span>  transition: all 0.5s ease;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-fade-enter-from {</span></span>
<span class="line"><span>  transform: translateX(50%);</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.slide-fade-leave-to {</span></span>
<span class="line"><span>  transform: translateX(-50%);</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="template部分" tabindex="-1">template部分 <a class="header-anchor" href="#template部分" aria-label="Permalink to &quot;template部分&quot;">​</a></h2><ul><li>v-slot中的Component表示当前匹配的组件，route为当前路由的详细信息</li><li>transition是Vue提供的内置组件，过渡模式为out-in，当前组件退出后，新组件才会进入</li><li>keep-alive是Vue提供的内置组件，用于缓存动态组件，避免频繁销毁创建常用组件</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;router-view v-slot=&quot;{ Component, route }&quot;&gt;</span></span>
<span class="line"><span>    &lt;transition :name=&quot;getTransitionName(route)&quot; mode=&quot;out-in&quot;&gt;</span></span>
<span class="line"><span>      &lt;keep-alive include=&quot;Home,Read,User&quot;&gt;</span></span>
<span class="line"><span>        &lt;component :is=&quot;Component&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/keep-alive&gt;</span></span>
<span class="line"><span>    &lt;/transition&gt;</span></span>
<span class="line"><span>  &lt;/router-view&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,12)]))}const d=a(l,[["render",i]]);export{m as __pageData,d as default};
