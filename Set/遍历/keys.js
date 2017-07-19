let a = new Set( [
    123,
    '12',
    31
] );
// 遍历所有key
// 注意：这里的key等于value
// 键值对为123:123 '12':'123' 31:31
for( let i of a.keys() ){
    console.log( i );
}