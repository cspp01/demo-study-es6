let a = new Set( [
    123,
    '12',
    31
] );
// 遍历所有value
for( let i of a.values() ){
    console.log( i );
}