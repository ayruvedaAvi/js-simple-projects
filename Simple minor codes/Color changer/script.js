let colors=["red","yellow","green","orange","cyan"];
document.getElementById("detect").addEventListener("click",changer);
function changer(){
    let i=randomNum()-1;
    console.log("Changer called.");
    console.log("Random num generated is "+i);
    let color=colors[i];
    console.log("Random color is "+color);
    let element=document.getElementById("color");
    element.innerHTML=color;
    element.style.color=color;
    document.body.style.backgroundColor=color;
}
function randomNum(){
    min=Math.floor(1);
    max=Math.ceil(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
