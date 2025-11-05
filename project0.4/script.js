//create variable for input response
const display = document.getElementById('response')
//this will add the number on the input
function added(value){
    display.value += value;
}

//do the operation works +-/*
function calculate(){
    display.value = eval(display.value);
}

//claer the all on the display
function clearall(){
    display.value = '';
}