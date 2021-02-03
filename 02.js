for(let i=0;i<5;i++){
    console.log(i);
}
//使用let不会造成变量穿透，到这一步就会报错
// console.log(i); 

//使用const这个常量将不能被修改
const PI = Math.PI;
// PI = 100;
console.log(PI);