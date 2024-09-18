var display = document.getElementById('input-value');
function append(charachter){
    display.value += charachter;
    display.style.fontSize = "20px";
}

function appendcharacter(){
    display.value =eval(display.value)
}

function clearall(){
   display.value = ''
}
function deleteall(){
    display.value = display.value.slice(0,-1)
}
