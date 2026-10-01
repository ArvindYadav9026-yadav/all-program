let user1 ={
    name:"Ranjit",
    age :23,
    // country:india,
    printName(){
        console.log(`hii,I am ${this.name} and ${this.country}`);
    }
}


let user2 ={
    name:"mansi",
    age :22,
    // country:pakistan,
   
}
let user3 ={
    name:"mahi",
    age :26,
    // country:Srianka,
   
}
// user1.printName()

// user1.printName.call(user2)
// user1.printName.call(user3)



// user1.printName.apply(user2,["india"])

const newfun=printName.bind(user1,"india,delhi")
console.log(newfun)

newfun()