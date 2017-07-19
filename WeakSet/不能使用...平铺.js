let a = new WeakSet(),
    b = {};
a.add( b );
// 错误，不能使用...
console.log( ...a );