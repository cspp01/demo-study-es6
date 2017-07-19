let a = new Map( [
    [ 'a', 'b' ],
    // key同名取最后一个
    [ 'a', '123' ],
    [ '1', 'asd' ]
] );
console.log( a.get( 'a' ) );
