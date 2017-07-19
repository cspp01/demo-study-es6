let a = new Set( [ 1, 3, 2, 5, 4 ] ),
    b = new Set( [ 1, 'qwd', 7, 9 ] ),
    c = new Set( [ ...a, ...b ] );
// 合并
console.log( [ ...a, ...b ] );
console.log( [ ...c ] );
// 交集
console.log( [ ...a ].filter( x => b.has( x ) ) );


var aa = [ 1, 2, 3, 4, 5 ],
    bb = [ 1, 2, 'asd' ];
console.log( aa.filter( function( x ) {
    // console.log( x );
    bb.map( function( y ) {
        if( x === y ) {
            console.log( x,1 );
            return true;
        }
    } )
} ) );
