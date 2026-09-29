// let  user ={
//     name:"arvind",
//     age:12,

// }
// // console.log(user);
// Object.prototype.allInOne=function(arr){
    
//         console.log("all in one hu mai laddle");

//     }



// Array.prototype.PrintItems=function(arr){
//     for(let i=0; i<arr.length;i++){
//         console.log(arr[i]);

//     }

// }

// let arr =[1,2,3]

// // console.log(arr.__proto__.__proto__===user.__proto__);

// console.log(arr.__proto__)

// // arr.PrintItems(arr)

// let colors = ["red", "greenn","orange"]
// arr.PrintItems(arr)
// colors.PrintItems(colors)



// String.prototype.firstTwoCharctors = function(){
//     // console.log("hello mene bananya hai");
//     // return this.firstTwoCharctors;
//     console.log(this[0]+this[1]);

// }

// "arvind".firstTwoCharctors()

// "yerh".allInOne()
// arr.allInOne()
// user.allInOne()


// function random(){

// }
// random.allInOne();

// Number(1).allInOne()


// let user ={
//     name:"Arvind",
//     toString(){
//         console.log("ye apna method hai");
//     }
// }

// // console.log(user);
// user.toString()

// let animal ={
//     eat(){
//         console.log("eat")
//     }
// }

// let person = Object.create(animal)


// person.walk =function(){
//     console.log("walk")
// }

// let student = Object.create(person)

// student.study = function(){
//     console.log("study")
// }

// console.log(person);
// console.log(student);

// console.log(student.hasOwnProperty("study"));
// console.log(student.hasOwnProperty("eat"));


// let obj = Object.create({})

// console.log(obj )



 class User{
    country="india"; // defoly property
    constructor(name,country){
        // console.log("hello");
        this.name=name; // intense property
        this.country=country // intense property
    }

    printNmae(){ // intense method 
        console.log(this.name);
    }
 }
 let u1 =new User("Nishant","India")
  let u2 =new User("vinay","India")