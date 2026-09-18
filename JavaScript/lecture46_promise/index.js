
// console.log("a")

// const p = new Promise(function(resolve,reject){
// //    console.log("b")
// // resolve("hii");
// reject("server down hai beta")


// })
// // console.log(typeof p);// object
// // console.log("c")
// // p.then(function onfilled(val){
// //     console.log(val)
// // },function onRejected(val){
// //     console.log(val)
// // })
// p.then(function(val){
//     console.log(val)
// })
// .then(()=>{})
// .then()
// .then()
// .then()
// .catch(function (val){
//     console.log(val);
// }).finally(function(){
//     console.log("ye to hamesha chlega")
// })


// console.log("a")

// const p2 =new Promise(function (resolve,reject){
//     console.log("b")
//     resolve("hello")
//     console.log("random")
// })
// p2.then(function f2 (valve){
//     console.log(valve)
// }).catch(function f3(valve){
//     console.log(valve)
// }).finally(function f3(valve){
//     console.log("j")
// })
// console.log("c")


// const p3 =new Promise(function f1(resolve,reject){
//     resolve()
// })
// })
// Promise.resolve().then(function f2(){
//     console.log("Inside Resolve Promise")
// // }).catch(function(err){
// //     console.log("hii error")
// // })
// p3.then(function f3(){
//     console.log("f3")

// })

// setTimeout(function f3(){
//     console.log("SetTimeOut")
// },2000)
//     Promise.resolve().then(function f2(){
//     console.log("Inside Resolve Promise")
// })
// p3.then(function f3(){
//     console.log("f3")

// })

function searchPizza(){
    return new Promise(function (resolve,reject){
        console.log("Pizza seraching");
    setTimeout(function fun1(){
        console.log("Here is Pizza menu");
        let price=500;
        resolve(price)
        //     
        // cb1();

    },2000)

    })
    
}
function addToCart(price){
 return new Promise(function (resolve,reject){
        console.log("pizza added to cart...")
    setTimeout(function fun2(){
        console.log("Pizzza Added to cart")
        resolve(price)
    },3000)
})
}
function payment(price){
 return new Promise(function (resolve,reject){
        console.log(`payment Intiated,Ammount:${price}`);
    setTimeout(function fun3(){

        let isPaymentSuccessful=false
        if(isPaymentSuccessful){
        console.log(`Pyament Completed,Amount:${price}`);
    resolve()
 }  else{
    reject("Bhaiya Payment failed")
 }
    },5000)
})
}
let res =searchPizza()
res.then(function(price){
    
  return  addToCart(price)
}).then(function(price){
    console.log(price)
    return payment(price)
}).then(function(){
    console.log("bs aa hee gya pizza")
}).catch(function(err){
    console.log(err)

})










