( function( w ) {
    class Aaa {
        constructor() {
            this.p =document.getElementById( 'box' );
            this.x = document.getElementById( 'msgbox' );
            this.y = this.p.getElementsByTagName( 'button' )[ 0 ];
            this.t = 1;
        }
        init() {
            this.y.onclick = () => this.fuClick();
        }
        fuClick() {
            let p = document.createElement( 'p' );
            p.innerHTML = this.t ++;
            this.x.appendChild( p );
        }
    }
    w.Aaa = Aaa;
} )( window );