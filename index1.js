let str=document.getElementById("screen");

function input(x){
    str.value=str.value+x;
}

function backpress(){
    str.value=str.value.slice(0,-1);
}
function allclr(){
    str.value=" ";
}

function cal(){
    try{
        str.value=eval(str.value);
    }
    catch{
        str.value="error";
    }
}