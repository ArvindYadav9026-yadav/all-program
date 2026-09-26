

function Outer(){
    let x=1;

    function inner(){
        console.log(x)
    }
    inner();

}
let res=Outer();

res();