
// const button=document.querySelector(".play-pause");

// button.addEventListener("click",change);

// function change(){
//     const video=document.querySelector('.video');
//     let content= button.innerHTML;
//     console.log(content);
//     if (content=='Pause'){
//         video.pause();
//         button.innerHTML="Play";
//     }else{
//         video.play();
//         button.innerHTML="Pause";
//     }
// }

//getting the button element
const button=document.querySelector(".play-pause");

//adding function to the button when clicked
button.addEventListener("click",change);
//getting the video element
const video=document.querySelector('.video');

//function for pausing and playing the video
function change(){
    
    let content= button.innerHTML;
    console.log(content);
    if (content=='Pause'){
        video.pause();
        button.innerHTML="Play";
    }else{
        video.play();
        button.innerHTML="Pause";
    }
}