//javascript

let celcius = document.getElementById('inputcelcius').value;

function convert(){
    
        let celcius = document.getElementById('inputcelcius').value;
        let fahrenheit = (celcius * 9/5) + 32
        document.getElementById('outputfahrenheit').textContent=fahrenheit
 
        let rumus = `(${celcius}°C × 9/5) + 32 = ${fahrenheit}°F`;
        document.getElementById('hasilkalkulasi').value = rumus;

}

//RESET

function reset(){

    document.getElementById('inputcelcius').value=''
    document.getElementById('outputfahrenheit').textContent=''
    document.getElementById('hasilkalkulasi').value=''

}

//REVERSE

function reverse(){

    
}
