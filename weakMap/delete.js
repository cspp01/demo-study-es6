let o = {},
    a = new WeakMap( [
        [ o, '123' ]
    ] );
console.log( a.get( o ) ); // -> 123
// 通过key删除项目
a.delete( o );
console.log( a.get( o ) ); // -> undefined
