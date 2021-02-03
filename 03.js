var info = {
    name:"咚咚",
    link:"www.baidu.com",
    hobby:"乒乓球"
}
let msg = "传统方式---我是"+info.name+"我的爱好是打"+info.hobby+"我经常百科的网站是"+info.link;
console.log(msg);

let msg2 = `ES6方式---我是${info.name}我的爱好是打${info.hobby}我经常百科的网站是${info.link}`;
console.log(msg2);