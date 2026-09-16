let student = {
    name:"Arvind",
    rollNo:34,
    subjects:["math","science","english"],
}

// how to rename key
let {subjects:vishay,totalMarks=500,...hello} =student;
// console.log(vishay);
// console.log(totalMarks)


let obj1 = {
    name:"Arvind",
    phone:3209563406,
}

let obj2 = {
    address:"india",
    adharCard:567587567869,
    name:"yes",

}
let obj3 ={...obj1 , ...obj2}

// console.log(obj3);


//array and object update

const arr = [1,2,3,4]
arr[0] ="are"

// console.log(arr)


const obj ={
    name:"arvind",
    rollNo:23,
    address:null
}
obj["name"]="dasfs"

delete obj.rollNo // property deleated



// console.log(obj.address?.street);

// let arr1 =[1,2,3,4,5,6]
// arr1.splice(1,3) // \\deleate
// arr1.splice(3,0,2)\\add
// arr1.splice(3,1,2)// replace
//  let trimArr=arr1.slice(1,4)
// console.log(trimArr)

// console.log(arr1.indexOf(7))


// let res =arr1.find((value) => {
//     return value==="3";

// })
// console.log(res)

// // flat
// let arr3 =[2,4,6,[44,[43,45]]] 

// // console.log(arr3.flat(Infinity));

// mutablility

let arr4 =[4,5,6,62,213,12]
let arrcopy = arr4;
let arrcopy2 = [...arr4];
arrcopy2.pop()
console.log("arr4",arr4);
console.log("arrcopy",arrcopy);
console.log("arrcopy2",arrcopy2);