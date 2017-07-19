// 只能存对象
// WeakSet值时唯一的
// 主要用来
let a = new WeakSet(),
    b = {};
// add()，has()和set的使用方法一样
a.add( b );
// a.add( b );
console.log( a.has( b ) ); // true


