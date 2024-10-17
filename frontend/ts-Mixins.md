# TypeScript-Mixins
在TS中，Mixins是一种通过组合多个类的功能来创建新类的方式。Mixins允许将一个类的功能'混入'到另一个类中，从而避免代码重复，并提高代码的可复用性。
## 对象混入
可以使用es6的Object.assign合并多个对象

此时对象people会被推断为一个交差类型Name&Age&sex
```
interface Name{
    name:string
}
interface Age{
    age:number
}
interface Sex{
    sex:number
}

let people1:Name={name:'上村莉菜'}
let people2:Age={age:27}
let people3:Sex={sex:1}

const people=Object.assign(people1,)