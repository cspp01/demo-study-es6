let a = new WeakSet(),
    c = 123;
// 错误
// 1.WeakSet只能存对象
a.add( c );
console.log( a.has( c ) );
