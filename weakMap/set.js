let o = {},
    p = {
        a : 123
    },
    a = new WeakMap( [
        [ o, '123213' ]
    ] );
// 加入数据( key, value )
a.set( p, 'asdsadasd' );
// 通过key获取数据
console.log( a.get( p ) );
