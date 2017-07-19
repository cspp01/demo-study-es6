let a = new Map( [
    [ 'a', '123123' ]
] );
console.log( a.get( 'a' ) ); // -> false
// 通过key来删除项目
a.delete( 'a' );
console.log( a.get( 'a' ) ); // -> undefined