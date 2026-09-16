const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const char_count = document.querySelector("#char_count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const possword_hint = document.querySelector("#possword_hint")
const possword = document.querySelector("#possword")


function showError(input,error_message){
    input.parentElement.querySelector(".error_message").textContent=error_message

}
function clearError(input){
       input.parentElement.querySelector(".error_message").textContent=""
    
}


function valiUsername(username){
    console.log(username.parentElement.querySelector(".error_message"));
    if(username.value.trim().length==0){
        showError(username,"please Enter your name")
        
       return false
    }

  if(username.value.trim().length<3){
showError(username,"username must be at least 3 charctor")
       return false
    }

    clearError(username)
return true;




}

form.addEventListener("submit", (e) => {
    e.preventDefault();



    // const name =document.querySelector("#name").value 
    // const possword=document.querySelector("#possword").value
const isUsernameValid =valiUsername(username);

    // const email = document.querySelector("#email").value

    // console.log({ username: username.value, possword: possword.value, email });
    // })
    if(isUsernameValid ){
        console.log("Form is valid");
    } else{
        console.log("form is invalid")
    }







})
// bio.addEventListener("input",(e)=>{
//     const remaining =150-bio.value.length;
//     // console.log(remaining)
//     // console.log(bio.value.length)
//     char_count.textContent =`${remaining} characters remaining`
// })
// username.addEventListener("change" ,(e)=>{
//     console.log( "change event",username.value)

// })
// username.addEventListener("input" ,(e)=>{
//     console.log( "change event",username.value)

// })


// checkbox.addEventListener("change" ,(e)=>{
//     console.log(checkbox.checked);

// })
// country.addEventListener("change" ,(e)=> {
//     console.log(country.value)

// })
//  username.addEventListener("focus" ,(e)=>{
//     console.log( "focus")
//  })
//  username.addEventListener("blur" ,(e)=>{
//     console.log( "blur")
//  })
//  possword.addEventListener("focus" ,(e)=>{
//     possword_hint.classList.remove("hidden")
//  })
//  possword.addEventListener("blur" ,(e)=>{
//     possword_hint.classList.add("hidden")
//  })