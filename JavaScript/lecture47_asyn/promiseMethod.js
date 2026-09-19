
// function fun1(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("fun1")
//     },3000)

//    })
   
// }

// function fun2() {
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("fun2")
//     },1000)

//    })
  
// }
// async function fun3(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("fun3")
//     },7000)

//    })
// }

// //  let result = Promise.all([fun1(),fun2(),fun3()]) 
// //  console.log(result)())
//  let result = Promise.any([fun1(),fun2(),fun3()])

//  result.then(data=>{
//     console.log(data)
//  }).catch(err=>{
//     console.log(err)
//  })

 async function getGithubUser(username) { // promise + await keyword usage allowed
  const response = await fetch(`https://api.github.com/users/${username}`); // Execution stops here until fetch promise is fulfilled
  const data =await response.json()
  return data
}

getGithubUser("ArvindYadav9026-yadav ").then((data)=>{
   console.log(data);
})
