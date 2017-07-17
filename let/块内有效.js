// 块就是大括号
// let 的变量块内有效
for( let a = 0; a < 10; a ++ ) {
    console.log( a );
}
// let 只在for{}大括号内有效，所以这里找不到，报错
// console.log( a );
if( 10 ) {
    let b = 20;
    console.log( b );
}
console.log( b ); // 报错 b只在if{}内有效