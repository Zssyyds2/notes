import{_ as n,c as a,a4 as e,o as p}from"./chunks/framework.D0KwTCVo.js";const d=JSON.parse('{"title":"路由切换","description":"","frontmatter":{},"headers":[],"relativePath":"project/lx-路由切换.md","filePath":"project/lx-路由切换.md","lastUpdated":null}'),l={name:"project/lx-路由切换.md"};function r(t,s,i,c,o,u){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="路由切换" tabindex="-1">路由切换 <a class="header-anchor" href="#路由切换" aria-label="Permalink to &quot;路由切换&quot;">​</a></h1><p>路由切换直接用router难以判断逻辑，因此封装一个go函数来统一判断实现。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import router from &quot;@/router&quot;;</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,3)]))}const m=n(l,[["render",r]]);export{d as __pageData,m as default};
