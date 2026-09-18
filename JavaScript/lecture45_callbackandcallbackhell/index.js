// function fun1(Callback){
//     console.log("hii");
//     Callback();
// }
// function cb(){
//     console.log("THis is Callback function")
// }
// fun1(cb);


// let arr =["a","b","c","d"]

// arr.forEach()
// arr.map()

// function a(){
     
//     function b(){

//     }
//     return b
// }
// function searchPizza(cb1){
//     console.log("Pizza seraching");
//     setTimeout(function(){
//         console.log("Here is Pizza menu");
//         let price=500;
//         cb1(500);
//         return 500;
//         // cb1();

//     },2000)
// }
// function addToCart(cb2){
//     console.log("pizza added to cart...")
//     setTimeout(function(){
//         console.log("Pizzza Added to cart")
//         cb2();
//     },3000)
// }
// function payment(price,cb3){
//     console.log(`payment Intiated,Ammount:${price}`);
//     setTimeout(function(){
//         console.log(`Pyament Completed,Amount:${price}`);
//         cb3();
//     },5000)
// }
// searchPizza(function(price){
//     // console.log(price)
//     addToCart(function(){
//         payment(price,function(){
//             console.log("BAs aa hi gya")

//         })
//     });

// });

function searchPizza(cb1){
    console.log("Pizza seraching");
    setTimeout(function(){
        console.log("Here is Pizza menu");
        let price=500;
        cb1(500);
        return 500;
        // cb1();

    },2000)
}
function addToCart(cb2){
    console.log("pizza added to cart...")
    setTimeout(function(){
        console.log("Pizzza Added to cart")
        cb2();
    },3000)
}
function payment(price){
    console.log(`payment Intiated,Ammount:${price}`);
    setTimeout(function(){
        console.log(`Pyament Completed,Amount:${price}`);
        console.log("Bss aa gya Pizza")
    },5000)
}
searchPizza(function(price){
    // console.log(price)
    addToCart(function(){
        payment(price)
    });

});



