let celcius_input = document.getElementById('celcius');
let fahrenheit_input = document.getElementById('fahrenheit');
let kelvin_input = document.getElementById('kelvin');

let btn = document.querySelector('button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celcius_input.oninput = function(){
    let cTemp = parseFloat(celcius_input.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheit_input.value = roundNumber(fTemp)
    kelvin_input.value = roundNumber(kTemp)
}

fahrenheit_input.oninput = function(){
    let fTemp = parseFloat(fahrenheit_input.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celcius_input.value = roundNumber(cTemp)
    kelvin_input.value = roundNumber(kTemp)
}

kelvin_input.oninput = function(){
    let kTemp = parseFloat(kelvin_input.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celcius_input.value = roundNumber(cTemp)
    fahrenheit_input.value = roundNumber(fTemp)
}

btn.addEventListener('click', ()=>{
    celcius_input.value = ""
    fahrenheit_input.value = ""
    kelvin_input.value = ""
})