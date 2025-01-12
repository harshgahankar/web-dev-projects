const display = document.getElementById("display")

function appendValue(value){
    display.value += value; 
}

function clrdisp(){
    display.value = " ";
}

function result(){
    try {
        display.value = eval(display.value);
    } catch(error){
        alert("invalid expression");
        clrdisp();
    }
}