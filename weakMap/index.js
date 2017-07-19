let o = {};
let a = new WeakMap( [
    [ o, '123' ]
] );
console.log( a.has( o ) );
