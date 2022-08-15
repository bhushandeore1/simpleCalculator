var string="";
let noofbuttons=document.querySelectorAll("button")
Array.from(noofbuttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        if(e.target.innerHTML=='←'){
            string = string.innerHTML.slice(0,- 1);
            document.querySelector("input").value=string;
        }
        if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector("input").value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }

    })
});
    
    
