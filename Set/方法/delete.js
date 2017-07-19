let a = new Set( [
    1,
    2,
    3
] );
console.log( ...a ); // 1 2 3
a.delete( 3 );
console.log( ...a ); // 1 2
