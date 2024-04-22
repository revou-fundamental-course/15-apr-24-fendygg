//javascript

const inputcelcius = document.getElementById("inputcelcius");
let outputfahrenheit = document.getElementById("outputfahrenheit");

function convert(){

    let inputcelcius = document.getElementById("inputcelcius").value;
    outputfahrenheit.textContent = inputcelcius * 9/5 + 32

}