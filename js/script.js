//CONVERT ======================================================================================================================================================================================

let celcius = document.getElementById('inputcelcius').value;

function convert(){

    if (reverseStatus) { // mengecek status reverseStatus
        let fahrenheit = document.getElementById('inputfahrenheit').value; // jika reverseStatus = true, gunakan rumus Fahrenheit ke Celsius
        let celcius = (fahrenheit - 32) * 5/9
        document.getElementById('outputcelcius').textContent=celcius
 
        let rumus = `(${fahrenheit}°F - 32) × 5/9 = ${celcius}°C`; // memunculkan rumus cara kalkulasi
        document.getElementById('hasilkalkulasi').value = rumus;

    } else {
        let celcius = document.getElementById('inputcelcius').value; // jika reverseStatus = false, gunakan rumus Celsius ke Fahrenheit
        let fahrenheit = (celcius * 9/5) + 32
        document.getElementById('outputfahrenheit').textContent=fahrenheit
 
        let rumus = `(${celcius}°C × 9/5) + 32 = ${fahrenheit}°F`; // memunculkan rumus cara kalkulasi
        document.getElementById('hasilkalkulasi').value = rumus;
    }

}

//RESET =========================================================================================================================================================================================

function reset(){
    
    if (reverseStatus) { // mengecek status reverseStatus
        document.getElementById('inputfahrenheit').value='' 
        document.getElementById('outputcelcius').textContent=''
        document.getElementById('hasilkalkulasi').value=''
    
    } else {
        document.getElementById('inputcelcius').value=''
        document.getElementById('outputfahrenheit').textContent=''
        document.getElementById('hasilkalkulasi').value=''
    }

}

//REVERSE ========================================================================================================================================================================================

let reverseStatus = false; // aturan default

function reverse(){

    let ctof = document.getElementById('ctof');
    let ftoc = document.getElementById('ftoc');

    if (reverseStatus) {
       
       ctof.style.display = 'block'; // tampilan default
       ftoc.style.display = 'none';
       reverseStatus = false;

    } else {
        
        ctof.style.display = 'none'; // tampilan reverse
        ftoc.style.display = 'block';
        reverseStatus = true;

    }
}
// fendygg222@gmail.com (untuk konfirmasi email saja)