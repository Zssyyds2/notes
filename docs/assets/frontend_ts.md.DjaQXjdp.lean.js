import{_ as n,c as a,a4 as p,o as e}from"./chunks/framework.D0KwTCVo.js";const d=JSON.parse('{"title":"TypeScript泛型","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"frontend/ts.md","filePath":"frontend/ts.md","lastUpdated":1728990674000}'),l={name:"frontend/ts.md"};function i(r,s,t,c,b,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="typescript泛型" tabindex="-1">TypeScript泛型 <a class="header-anchor" href="#typescript泛型" aria-label="Permalink to &quot;TypeScript泛型&quot;">​</a></h1><p>泛型在TypeScript 是很重要的东西 例如vue3 是用ts编写的 里面用到了非常多的泛型</p><h2 id="函数泛型" tabindex="-1">函数泛型 <a class="header-anchor" href="#函数泛型" aria-label="Permalink to &quot;函数泛型&quot;">​</a></h2><h3 id="小例子" tabindex="-1">小例子 <a class="header-anchor" href="#小例子" aria-label="Permalink to &quot;小例子&quot;">​</a></h3><p>假设有两个函数，实现的功能是一样的，但就是类型不同，这时候就可以用泛型来优化</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function num (a:number,b:number) : Array&lt;number&gt; {</span></span>
<span class="line"><span>    return [a ,b];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>num(1,2)</span></span>
<span class="line"><span>function stra (a:string,b:string) : Array&lt;string&gt; {</span></span>
<span class="line"><span>    return [a ,b];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>stra(&#39;上村莉菜&#39;,&#39;田村保乃&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="泛型优化" tabindex="-1">泛型优化 <a class="header-anchor" href="#泛型优化" aria-label="Permalink to &quot;泛型优化&quot;">​</a></h3><p>语法为函数名字后跟一个&lt;参数名&gt;（参数名可以随便取）</p><p>当我们使用这个函数的时候吧参数的类型传进去就可以了</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Add&lt;T&gt; (a:T,b:T) : Array&lt;T&gt; {</span></span>
<span class="line"><span>    return [a ,b];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Add(1,2)</span></span>
<span class="line"><span>Add&lt;string&gt;(&#39;上村莉菜&#39;,&#39;田村保乃&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当然我们也可以使用不同的泛型函数名，只要在数量上和使用方式能对应上就行</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Add&lt;T,U&gt; (name:T,born:U) : Array&lt;T | U&gt; {</span></span>
<span class="line"><span>    return [name,born];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Add(1,2)</span></span>
<span class="line"><span>Add&lt;string,number&gt;(&#39;上村莉菜&#39;,1997)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="定义泛型接口" tabindex="-1">定义泛型接口 <a class="header-anchor" href="#定义泛型接口" aria-label="Permalink to &quot;定义泛型接口&quot;">​</a></h2><p>声明接口的时候在名字后面加一个&lt;参数&gt;</p><p>使用的时候传递类型</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//type</span></span>
<span class="line"><span>type A&lt;T&gt;=string | number | T;</span></span>
<span class="line"><span>let sclc:A&lt;boolean&gt;=&#39;上村莉菜&#39;</span></span>
<span class="line"><span>let a:A&lt;undefined&gt;=undefined</span></span>
<span class="line"><span>//接口interface</span></span>
<span class="line"><span>interface Data&lt;T&gt;{</span></span>
<span class="line"><span>    msg:T</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let data:Data&lt;string&gt;={</span></span>
<span class="line"><span>    msg:&quot;今天是10月15号&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let sj:Data&lt;number&gt;={</span></span>
<span class="line"><span>    msg:10.59</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//泛型也可以初始定义一个值，但还是根据传的来</span></span>
<span class="line"><span>function add&lt;T=boolean,K=number&gt;(a:T,b:K):Array&lt;T|K&gt;{</span></span>
<span class="line"><span>    return [a,b]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>add(1,false)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="泛型的应用" tabindex="-1">泛型的应用 <a class="header-anchor" href="#泛型的应用" aria-label="Permalink to &quot;泛型的应用&quot;">​</a></h2><p>手搓一个axios</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const axios={</span></span>
<span class="line"><span>    get&lt;T&gt;(url:string):Promise&lt;T&gt;{</span></span>
<span class="line"><span>        return new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>            let xhr:XMLHttpRequest=new XMLHttpRequest()</span></span>
<span class="line"><span>            xhr.open(&#39;GET&#39;,url)</span></span>
<span class="line"><span>            xhr.onreadystatechange=()=&gt;{</span></span>
<span class="line"><span>                if(xhr.readyState==4 &amp;&amp; xhr.status==200){</span></span>
<span class="line"><span>                    resolve(JSON.parse(xhr.responseText))</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            xhr.send(null)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Data{</span></span>
<span class="line"><span>    &quot;message&quot;:string,</span></span>
<span class="line"><span>    &quot;code&quot;:number,</span></span>
<span class="line"><span>    &quot;sclc&quot;:string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>axios.get&lt;Data&gt;(&quot;./泛型.json&quot;).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res.sclc);</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="使用keyof约束对象" tabindex="-1">使用keyof约束对象 <a class="header-anchor" href="#使用keyof约束对象" aria-label="Permalink to &quot;使用keyof约束对象&quot;">​</a></h2><p>在TypeScript中，keyof是一个类型操作符，用于获取对象类型的所有键的联合类型。它通常用于类型安全的对象属性访问和操作。</p><p>其中使用了TS泛型和泛型约束。首先定义了T类型并使用了extends关键字继承object类型的子类型，然后使用keyof操作符获取T类型的所有键，它的返回类型是联合类型</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function prop&lt;T,K extends keyof T&gt;(obj:T,key:K){</span></span>
<span class="line"><span>    return obj[key]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let o={a:1,b:2,c:3}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(prop(o,&#39;b&#39;));//返回值为2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prop(o,&#39;d&#39;);//报错没找到&#39;d&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="keyof的高级用法" tabindex="-1">keyof的高级用法 <a class="header-anchor" href="#keyof的高级用法" aria-label="Permalink to &quot;keyof的高级用法&quot;">​</a></h2><p>利用泛型工具，实现对接口所有数据进行更改</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Data{</span></span>
<span class="line"><span>    name:string,</span></span>
<span class="line"><span>    age:number,</span></span>
<span class="line"><span>    sex:string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//类似于 for in for(let key in obj)</span></span>
<span class="line"><span>type Option&lt;T extends object&gt;={</span></span>
<span class="line"><span>    readonly [Key in keyof T]?:T[Key]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>type B=Option&lt;Data&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,26)]))}const m=n(l,[["render",i]]);export{d as __pageData,m as default};
