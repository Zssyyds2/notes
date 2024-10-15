---
outline: deep
---

# TypeScript泛型
泛型在TypeScript 是很重要的东西 例如vue3 是用ts编写的 里面用到了非常多的泛型

## 函数泛型

### 小例子
假设有两个函数，实现的功能是一样的，但就是类型不同，这时候就可以用泛型来优化
```
function num (a:number,b:number) : Array<number> {
    return [a ,b];
}
num(1,2)
function stra (a:string,b:string) : Array<string> {
    return [a ,b];
}
stra('上村莉菜','田村保乃')
```
### 泛型优化
语法为函数名字后跟一个<参数名>（参数名可以随便取）

当我们使用这个函数的时候吧参数的类型传进去就可以了
```
function Add<T> (a:T,b:T) : Array<T> {
    return [a ,b];
}
Add(1,2)
Add<string>('上村莉菜','田村保乃')
```

当然我们也可以使用不同的泛型函数名，只要在数量上和使用方式能对应上就行
```
function Add<T,U> (name:T,born:U) : Array<T | U> {
    return [name,born];
}
Add(1,2)
Add<string,number>('上村莉菜',1997)
```

## 定义泛型接口
声明接口的时候在名字后面加一个<参数>

使用的时候传递类型
```
//type
type A<T>=string | number | T;
let sclc:A<boolean>='上村莉菜'
let a:A<undefined>=undefined
//接口interface
interface Data<T>{
    msg:T
}
let data:Data<string>={
    msg:"今天是10月15号"
}
let sj:Data<number>={
    msg:10.59
}
//泛型也可以初始定义一个值，但还是根据传的来
function add<T=boolean,K=number>(a:T,b:K):Array<T|K>{
    return [a,b]
}
add(1,false)
```
## 泛型的应用
手搓一个axios
```
const axios={
    get<T>(url:string):Promise<T>{
        return new Promise((resolve,reject)=>{
            let xhr:XMLHttpRequest=new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4 && xhr.status==200){
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}
interface Data{
    "message":string,
    "code":number,
    "sclc":string
}
axios.get<Data>("./泛型.json").then(res=>{
    console.log(res.sclc);
})
```
## 使用keyof约束对象
在TypeScript中，keyof是一个类型操作符，用于获取对象类型的所有键的联合类型。它通常用于类型安全的对象属性访问和操作。

其中使用了TS泛型和泛型约束。首先定义了T类型并使用了extends关键字继承object类型的子类型，然后使用keyof操作符获取T类型的所有键，它的返回类型是联合类型
```
function prop<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
let o={a:1,b:2,c:3}

console.log(prop(o,'b'));//返回值为2

prop(o,'d');//报错没找到'd'
```
## keyof的高级用法
利用泛型工具，实现对接口所有数据进行更改
```
interface Data{
    name:string,
    age:number,
    sex:string
}
//类似于 for in for(let key in obj)
type Option<T extends object>={
    readonly [Key in keyof T]?:T[Key]
}
type B=Option<Data>
```