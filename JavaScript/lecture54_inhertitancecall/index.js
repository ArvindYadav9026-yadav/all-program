 class User{
     constructor(name,email){
        this.name=name;
        this.email=email;
    }
    login(){
        console.log("login")
    }
    logout(){
        console.log("logout") 
    }

  }
  
  
  
  class Customer extends User{
    cart=[]
    constructor(name,email){
    super(name,email)
    }
    //     // this.name=name;
    //     // this.email=email;
    // }
    

    buyProduct(){ console.log("buy product")}

    addToCart(item){this.cart.push(item)}

    showCartItem(){console.log(this.cart)}
    // login(){}
    // logout(){}

  }

  class seller extends User{
    // constructor(name,email){
    //     // this.name=name;
    //     // this.email=email;
    // }
    addProduct(){
        console.log("add product")
    }
    // login(){}
    // logout(){}

  }
  class admin extends User{
    // constructor(name,email){
    //     // this.name=name;
    //     // this.email=email;
    //     }
        hideProduct(){
            console.log("hideProduct")
        }
        // login(){}
        // logout(){}
  }

  const c1 = new Customer("arvind","arvind@gmail.com")
//   const s1 = new seller("shaswat","arvind@gmail.com")
  
  console.log(c1);
//   console.log(s1);
//   c1.login()

c1.addToCart("macbkko")
c1.showCartItem()


class PremiumCustomer extends Customer{
    constructor(name,email){
        super(name,email)

    }
}
