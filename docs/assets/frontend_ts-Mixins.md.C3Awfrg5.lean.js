import{_ as n,c as a,a4 as e,o as p}from"./chunks/framework.D0KwTCVo.js";const d=JSON.parse('{"title":"TypeScript-Mixins","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/ts-Mixins.md","filePath":"frontend/ts-Mixins.md","lastUpdated":null}'),i={name:"frontend/ts-Mixins.md"};function l(r,s,t,c,b,o){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="typescript-mixins" tabindex="-1">TypeScript-Mixins <a class="header-anchor" href="#typescript-mixins" aria-label="Permalink to &quot;TypeScript-Mixins&quot;">​</a></h1><p>在TS中，Mixins是一种通过组合多个类的功能来创建新类的方式。Mixins允许将一个类的功能&#39;混入&#39;到另一个类中，从而避免代码重复，并提高代码的可复用性。</p><h2 id="对象混入" tabindex="-1">对象混入 <a class="header-anchor" href="#对象混入" aria-label="Permalink to &quot;对象混入&quot;">​</a></h2><p>可以使用es6的Object.assign合并多个对象</p><p>此时对象people会被推断为一个交差类型Name&amp;Age&amp;sex</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Name{</span></span>
<span class="line"><span>    name:string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Age{</span></span>
<span class="line"><span>    age:number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Sex{</span></span>
<span class="line"><span>    sex:number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let people1:Name={name:&#39;上村莉菜&#39;}</span></span>
<span class="line"><span>let people2:Age={age:27}</span></span>
<span class="line"><span>let people3:Sex={sex:1}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const people=Object.assign(people1,)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,6)]))}const u=n(i,[["render",l]]);export{d as __pageData,u as default};
