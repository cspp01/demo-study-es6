let Aaa = class h{
    constructor( x, y ) {
        h.x = x; // 也可用this.x
        h.y = y;
    }
    fu() {
        console.log( h.x + h.y );
    }
};
let a = new Aaa( 1, 3 );
a.fu();
