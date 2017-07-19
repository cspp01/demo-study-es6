let a = new Set( [
    123,
    '12',
    31
] );
// 遍历所有[ key, value ]
for( let i of a.entries() ){
    console.log( i );
}