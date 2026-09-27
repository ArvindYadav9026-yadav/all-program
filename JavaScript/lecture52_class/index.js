

// function Outter(){
//     const randaom =()=>{
//     console.log(this);



// }
// randaom()
// }
// Outter();
// // product();

// console.log(this);

// function product(name,price){
//     this.name=name
//     this.price=price
//     // console.log(this)
//     return this;
// }

// // let user ={
// //     name:"nishant"
// // }
// // user.phone ="54376856"
// // console.log(user);
//  const p1 = new product("iphone234",789688);
//  const p2 = new product("Samsubg",6876);

//  console.log(p1);
//  console.log(p2);



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

  u1.namw="name updated";
//  console.log(u1)
//  u1.printNmae()


 class bank {
    #balance; // this is private
    static totalbackAcoount=0;
    constructor(initialBalance){
        this.#balance=initialBalance
       bank.totalbackAcoount++

    }
    get(){
        console.log(this.#balance)

    }
    withdrow(amount){
        if(amount>this.#balance){
            console.log("bete itne paise nhi hai")
            return
        }
        this.#balance=this.#balance-amount

    }
    debit(amount){
         this.#balance=this.#balance+amount

    }
   static calculateTax(){
        console.log("calculating Tax....");
    }
}
let acc1=new bank(580);
let acc2=new bank(580);
let acc3=new bank(580);
let acc4=new bank(580);

acc1.get();
acc1.withdrow(580);
acc1.get()
acc1.debit(14343);
acc1.get()
acc1.withdrow(14000)
acc1.get()
// acc1.calculateTax() // error message

bank.calculateTax();
console.log(bank.totalbackAcoount);
