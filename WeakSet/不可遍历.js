let a = new WeakSet(),
    b = {};
// 错误，
// WeakSet不可遍历
for( let i of a.entries() ){
    console.log( i );
}
// 错误，
a.forEach( i => console.log( i ) );