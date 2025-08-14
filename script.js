document.getElementById("generate").addEventListener("click", () =>{
    const length = parseInt(document.getElementById("length").value);
    const includeUpperCase = (document.getElementById("upperCase").value);

    const includeSpecType = (document.getElementById("specType").value);
    const includeintegType = (document.getElementById("integType").value);

};

s

const specType = "!@#$%^&*()_+{};~?,./"; 
const integType ="0123456789";
const lowerCase = "abcdefghijklmonpqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function generatePass = [];



const text = document.getElementById("text");


// get length
let length = parseInt(document.querySelector("length").value);


// random index sets
let randomIndex = Math.floor(Math.random() * charSet.length);