let a = new Set( [
    1,
    2,
    3
] );
console.log( ...a ); // -> 1 2 3
// 清空
a.clear();
console.log( ...a ); // ->
