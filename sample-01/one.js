window.onload=function(){
    let left=document.querySelector(".button-left");
    let right = document.querySelector(".button-right");
    let min = document.querySelectorAll(".min");
    let images = document.querySelector(".images");

    let index=0;

    function select(){
        if(index==0){
            min[0].style.border="2px solid rgba(248, 248, 9, 0.985)";
            min[1].style.border="2px solid rgba(255, 255, 255, 0.5)";
            min[2].style.border="2px solid rgba(255, 255, 255, 0.5)";
        }else if(index==1){
            min[0].style.border="2px solid rgba(255, 255, 255, 0.5)";
            min[1].style.border="2px solid rgba(248, 248, 9, 0.985)";
            min[2].style.border="2px solid rgba(255, 255, 255, 0.5)";
        }else{
            min[0].style.border="2px solid rgba(255, 255, 255, 0.5)";
            min[1].style.border="2px solid rgba(255, 255, 255, 0.5)";
            min[2].style.border="2px solid rgba(248, 248, 9, 0.985)";
        }
    }
    
    select();

    function minus(){
        if(index==0) index = 2;
        else index--;
        images.style.left=(index *-100)+"%";
        select()
    }

    let add=()=>{
        if(index==2) index=0;
        else index++;
        images.style.left=(index *-100)+"%";
        select()
    }


    let time=setInterval(add,3000);

    left.addEventListener("click",()=>{
        minus();
        clearInterval(time);
        time=setInterval(add,3000);
    })

    right.addEventListener("click",()=>{
        add();
        clearInterval(time);
        time=setInterval(add,3000);
    });

    for (let i = 0; i < min.length; i++) {
        min[i].addEventListener("click", () => {
            index = i;
            images.style.left=(index *-100)+"%";
            clearInterval(time);
            time=setInterval(add,3000);
            select();
        })
    }

}
