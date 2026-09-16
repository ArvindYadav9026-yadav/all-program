

// console.log(a)
// var a=5;


// console.log(b);
// let b =6;
// fun1();
// function fun1(){
//     console.log("hii");
// }
//  fun2()

//  var fun2=function(){
//     console.log("hello");
//  }

// fun3()

// const fun3 =function(){
//     console.log("gk")
// }


var a=5;
let b=10;
console.log(a+b);

function outer(){
    let num1=10;
    let num2 =20;
    function inner(){
        let num1=50;
        let num2=60;
        return num1+num2;

    }
    


const result =inner()+num1+num2;
 return result;
}

 const result =outer()
 console.log(result)