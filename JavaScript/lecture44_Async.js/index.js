// console.log("Task 1");



// console.log("Task 2");
// // for(let i=0; i<10000000000;i++){

// // }
// let starTime =Date.now()
// while(Date.now()-starTime<1000){
    
// }




// console.log("Task 3");
// // console.log(document);
// console.log(globalThis);


// console.log("task 1");


// setTimeout(function cb(){
//     console.log("task 2");
//     let starTime =Date.now()
//  while(Date.now()-starTime<1000){
    
// }

// },0);

// console.log("task 3");
// console.log("a")
// setTimeout(()=>{
//     console.log("c");
// },4000)
//  let starTime =Date.now()
//  while(Date.now()-starTime<3000){
//  }
    
// setTimeout(()=>{
//     console.log("d");
// },1000)
// setTimeout(()=>{
//     console.log("e");
// },2000)
// console.log("b")

let count =1;
 let id=setInterval(function(){
  count++;
    if(count>5){
        clearInterval(id);
       
    }
      console.log("hii");
    
},1000) ;


