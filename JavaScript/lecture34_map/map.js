// let originalPrices =[463,654,2346]

// let discountedPrices = []

// for(value of originalPrices){
//     discountedPrices.push(value * 0.9)
// }
// console.log(originalPrices);
// console.log(discountedPrices);


// // const discountedPrices2 = originalPrices.map((value)=>{
// //     return value*0.9

// // })
// // // console.log(discountedPrices2)


// let student =[
//     {
//         name:"Aryan",
//         marks:56,
// },
// {
//     name:"fndskj",
//     marks:46,
// },
// {
//     name:"vgs",
//     marks:33,
// },
// {
//     name:"fn",
//     marks:30,
// },
// {
//     name:"fnhg",
//     marks:20,
// },
// ]
// const studentNames = student.map((student)=> student.name)
// const studentmarks = student.map((student)=> student.marks)

// const boostedmarks = student.map((student)=>{
//     return{...student, marks:student.marks+10}

// })
// console.log(boostedmarks)

// let failedStudent =[]
// student.forEach((student) => {
//     if(student.marks<33){
//         failedStudent.push(student)
//     }
// });
// console.log(failedStudent)
// const failedStudent =student.filter((student)=>{
//      student.marks<33
// })

// let marks =[56,24,62,73,78]

// let totalMarks = 0

// marks.forEach((marks)=> totalMarks+=marks)
// console.log(totalMarks);
// const totalMarks = marks.reduce((accumulator,currentvalue) => {
//     accumulator=accumulator+currentvalue
//     return accumulator

// },0)

const attendence =["present","present","absent","present","absent"]
// let obj ={}
// attendence.forEach((value)=>{
    // if(obj[value]){
    //     obj[value] =obj[value]+1
    // }
    // else{
    //      obj[value] =1
    // }
// })
// console.log(obj)
const obj =attendence.reduce((acc,value)=>{
    //  if(acc[value]){
    //     acc[value] =acc[value]+1
    // }
    // else{
    //      acc[value] =1
    // }
    // return acc;
   
},{})