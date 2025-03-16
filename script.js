const ib= document.getElementById("input box");
const lc=document.getElementById("list");
function at(){
    if(ib.value==""){
        alert("You should write a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=ib.value;
        lc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        
        li.appendChild(span);
        sd();
    }
    ib.value="";
    sd();
}
    
    lc.addEventListener("click",function(e){
        if(e.target.tagName=="LI"){
            e.target.classList.toggle("checked");
            sd();
        }
        else  if(e.target.tagName=="SPAN"){
            e.target.parentElement.remove();
            sd();
        }

        }
    ,false);
    function sd(){
        localStorage.setItem("data",lc.innerHTML);
    }
    function st(){
        lc.innerHTML=localStorage.getItem("data");
    }
    st();
