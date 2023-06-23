let button=document.querySelector('.nav-toogle');
let links = document.querySelector(".links");

button.addEventListener("click",function(){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links");
    }
    //Alternate: links.classList.toogle("show-links")
});