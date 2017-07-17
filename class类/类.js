// 原来够快函数怎么使用，他就怎么使用
// 主要是用来替换构造函数
// 它里面的函数会自动加到prototype中去
class Aaa{
    // 必须
    constructor( x, y ) {
        this.x = x;
        this.y = y;
    }
    fu() {
        console.log( this.x + this.y );
    }
}
let a = new Aaa( 1, 3 );
a.fu();
// 获取出Aaa的prototype对象
let b = Object.getOwnPropertyNames( Aaa.prototype );
console.log( b );
// 循环输出Aaa里prototype所有项
for( let i in b ) {
    console.log( b[ i ] );
}
