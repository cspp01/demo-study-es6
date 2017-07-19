let o = {},
    p = {
        a : 123
    },
    a = new WeakMap( [
        [ o, '123213' ]
    ] );
// 通过key获取数据
console.log( a.get( o ) );
