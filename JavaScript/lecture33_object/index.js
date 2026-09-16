// let product1=["iphone",5678];
// console.log(product1[1]);
// console.log(typeof product1);

let product2={
    name:"iphone",
    price:44466,
    totalReview:67,
    discount:10,
    avgRating:4.5,
    'first-name':45343,
    printProductName:function(){
        console.log(this.discount);
        console.log(this.name)
    },
    printDIscount(){
        console.log("105");
    }
}
// // console.log(product2);
// // console.log(product2.name);
// // console.log(product2["first-name"])
// // product2.printProductName();
// // product2.printDIscount();
// // console.log(Object.keys(product2));
// // console.log(Object.values(product2));
// // console.log(Object.entries(product2));


// // for(value of product1){
// //     console.log(value)
// // }
// // product1.forEach(function(value,index){
// //     console.log(value,index);

// // })

// function a(){
//     console.log("a");
// }
// function b(num){
//     console.log(num);
//     num();
//     console.log("b");
// }
// b(function a(){
//     console.log("a");
// });

// for(value in product2){
//     console.log(product2[value]);
// }

// distructing
// let product1=["iphone",567,4.5,6];
// const [a,b,c,d] =["iphone",567,4.5,6];
// console.log(a);
let {price,printDIscount,avgRating}=product2;
console.log(price,printDIscount,avgRating);
for([key,value] of Object.entries(product2)){
    console.log(key,value);
}

 let product1=["iphone",567,4.5,6];
const [name,prices,...hello ] =["iphone",567,4.5,6];
console.log(hello)

let arr =[2,45,243,45,6546,244,66,22,5]

// console.log(Math.min[2,45,243,45,6546,244,66,22,5]);
console.log(Math.min(...arr));

let a =[1,2];
let b=[3,4];

let c=[...a,...b]
console.log(...c)

