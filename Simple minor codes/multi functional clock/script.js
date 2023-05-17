
//For clock

function updateClock(){
    let now= new Date();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let seconds=now.getSeconds();
    let mer;
    if(hour>=12){
        mer=" pm";
        hour=hour-12;
    }else{
        mer=" am";
    }

    var time= hour +" : "+minute+" : "+seconds+mer;
    document.getElementById("clock").innerHTML=time;
}
setInterval(updateClock,1000);

//For timer
document.getElementById("enter-time").addEventListener("click",setTime);
let timer;
function setTime(){
    timer=parseFloat(prompt("Enter time in minutes: "));
    if(timer<=0){
        alert("Enter valid time.");
    }
}

let element=document.getElementById('timer');
document.getElementById("start-time").addEventListener("click",setTimer(timer,element));
function setTimer(duration, displayElement) {
    console.log("timer called")
    let timer = duration;
    let minutes, seconds;
  
    const intervalId = setInterval(function () {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      displayElement.innerHTML = minutes + ":" + seconds;
  
      timer--;
      if (timer < 0) {
        clearInterval(intervalId);
        alert("Countdown completed!");
      }
    }, 1000); 
  }


