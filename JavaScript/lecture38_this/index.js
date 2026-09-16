"use strict"
name1 ="hello"
// let student ={
//     name:"Arvind",
//     printName:function(){
//         console.log("hii",this.name);
//     }
// }
//  let result = student.printName;
//  result();

// console.log(this);
// console.log(global===globalThis);
var a=7;
// console.log(this.a);
function fun1(){
    console.log("function",this);
}
fun1();