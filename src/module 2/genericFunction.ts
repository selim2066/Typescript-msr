 

 const createFunGeneric =<T>(value:T)=> [value]

 const stringFun= createFunGeneric('selimNight')
 console.log(stringFun)

 const numberFun =createFunGeneric(262235)
 console.log(numberFun)

//  tupple generic fun

const createTuppleFun = <X,Y>(param1:X, param2:Y)=>[param1,param2]

console.log(createTuppleFun('selim','Night'))

console.log(createTuppleFun('selim','Night'))