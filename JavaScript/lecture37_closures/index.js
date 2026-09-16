function outer(){
    let  a=5;
    function inner(){
        console.log(a);
  
    }
    a = 10;
   return inner;
}
const response = outer();
response();