
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
    timer=parseFloat(prompt("Enter time in seconds: "));
    if(timer<=0){
        alert("Enter valid time.");
    }
}

let element=document.getElementById('timer');
document.getElementById("start-time").addEventListener("click",()=>setTimer(timer,element));
//When you pass parameters to a function it is immediately called. You need to pass a function 
//that will wait for the event and then call with the specified parameters.(learned this via stackoverflow.)
function setTimer(duration, displayElement) {
    console.log("timer called");
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


  //For stopwatch

  document.getElementById('start').addEventListener("click", startStopWatch());

  function startStopWatch(x){
    
    document.getElementById('count').innerHTML=x;
    x++;
  }

  const intervalId=setInterval(startStopWatch,1000);
  

