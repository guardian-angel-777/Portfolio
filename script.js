const navTrigger=document.querySelector(".nav-trigger");
const nav=document.querySelector(".stretchy-nav")
    navTrigger.addEventListener("click",function(){
        nav.classList.toggle("nav-is-visible");
        
    });
