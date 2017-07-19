let a = new Map( [
    [ 'a', '123' ],
    [ 'b', '1wqewqe' ]
] );
// 遍历所有value
for( let i of a.values() ) {
    console.log( i );
}