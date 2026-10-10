

let colors =["red","green","yellow","blaxk"]
let user ={
  name:"Nishant",
  isOnline:true
}
function printName(){
  console.log(user.name)
}

function App() {
  

  return (
    <>
       <div>Hello</div>
    <div>Hii</div>
    <p>{5+6}</p>
    <p>5+6</p>
   <ul>
    {
      colors.map(c=>{
        return <li>{c}</li>
      })
    }
   </ul>

   <p>{user.isOnline ? `${user.name} is online`: `${user.name} is offline`}</p>
   <button onClick={user.name}>click on me</button>
    </>
    
  
  );
   }  



export default App
