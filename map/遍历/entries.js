let a = new Map( [
    [ 'a', '123' ],
    [ 'b', '123213' ]
] );
// 遍历所有[ key, value ]
for( let i of a.entries() ) {
    console.log( i );
    console.log( i[ 1 ] );
}