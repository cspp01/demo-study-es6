let a = {},
    b = [];
// [ key, value ] key和value可以为对象，数组，字符串，数字，bool
let aa = new Map( [
    [ 'a', '12312' ], // 字符串
    [ 1, '12321' ], // number 字符串
    [ 2, 123 ],
    [ a, 123 ],
    [ a, a ],
    [ b, b ],
    [ true, b ]
] );
console.log( aa.get( a ) );
console.log( aa.get( b ) );
console.log( aa.get( true ) );