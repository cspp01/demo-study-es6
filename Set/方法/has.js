let a = new Set( [
        1,
        2,
        3,
        {
            aa : 123
        }
    ] );
// 判断是否存在着个项
console.log( a.has( 2 ) ); // true
a.delete( 2 );
console.log( a.has( 2 ) ); // false
