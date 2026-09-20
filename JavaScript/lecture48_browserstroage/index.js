//  localStorage.setItem("num1",1)
// localStorage.setItem("num2",1)



//  localStorage.setItem("num",1)

// localStorage.setItem("num4",1)
 


// let result =localStorage.getItem("Nishant") // yr null dega kyoki nishant local steoge me nhi hai
// console.log(result);

// let result2=localStorage.key("0");
// console.log(result2)

// // localStorage.clear()


// document.querySelector("#clear-local-stroage").addEventListener("click",()=>{
//     localStorage.clear()
// })


// // localStorage.removeItem("num");
// localStorage.clear()

// document.querySelector("#add-session-item").addEventListener("click",()=>{
//        sessionStorage.setItem("session","item");
// })


// let xhttp=new XMLHttpRequest();
// xhttp.onreadystatechange=function(){
//     let data=xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET","https://api.github.com/users/ArvindYadav9026-yadav",true);
// xhttp.send();


// fetch("https://api.github.com/users/ArvindYadav9026-yadav").
// then(data => data.json()).
// then(data => console.log(data))


// async function getUser(username="ArvindYadav9026-yadav") {
//     const response =await fetch(`https://api.github.com/users/${username}`)
//     const data = await response.json()
//     return data;
// }
async function getUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("User not found");
    }

    const data = await response.json();

    return data;
}


document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.querySelector("#Github-username").value.trim();

    if (!username) {
        document.querySelector("#show-profile").innerHTML =
            `<p>Please enter a GitHub username.</p>`;
        return;
    }

    try {
        const data = await getUser(username);

        document.querySelector("#show-profile").innerHTML = `
            <img src="${data.avatar_url}" alt="${data.login}">
            <h2>${data.name || "No name available"}</h2>
            <i>Username: ${data.login}</i>
            <p>${data.bio || "No bio available"}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repos: ${data.public_repos}</p>
        `;
    } catch (error) {
        console.error(error);

        document.querySelector("#show-profil").innerHTML =
            `<p>User not found or something went wrong.</p>`;
    }
});

// document.querySelector("live-status").textContent=navigator.onLine?"online":"offline"
document.querySelector("#live-status").textContent =
    navigator.onLine ? "online" : "offline";