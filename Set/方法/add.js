let a = new Set(),
    b = new Set();
// 加入最后，类似push
a.add( 1 );
a.add( 2 );
a.add( 2 );
a.add( '2' );
console.log( ...a ); // -> 1 2 '2'

[ 1, 2, 3, '3', 3 ].map( x => b.add( x ) );
console.log( ...b );// -> 1 2 3 '3'

