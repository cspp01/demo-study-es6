let a = new Map( [
    [ 'a', '123' ],
    [ 'b', 'adsad' ]
] );
// [ key, value ]
a.set( 'c', 'adasd' );
console.log( a.get( 'c' ) ); // -> adasd
