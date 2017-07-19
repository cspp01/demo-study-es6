let a = new Map( [
    [ 'a', '123' ],
    [ 'b', '12321' ]
] );
// 遍历所有项目的key
for( let i of a.keys() ) {
    console.log( i );
}