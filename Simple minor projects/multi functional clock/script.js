
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

      //Math.floor rounds down the given number(eg: 1.2 is rounded down to 1)

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
  
  document.getElementById('start').addEventListener("click", () => startStopWatch());
  document.getElementById('pause').addEventListener('click', () => setFlag(event));
  document.getElementById('lap').addEventListener('click', () => setFlag(event));
  document.getElementById('stop').addEventListener('click', () => setFlag(event));
  document.getElementById('play').addEventListener('click', () => setFlag(event));
  
  var x = 0;
  var flag = 0;
  var intervalId;
  var laps =[];
  
  function setFlag(event) {
    var etarget = event.target.id;
    if (etarget == 'pause') {
      flag = 1;
    } else if (etarget == 'lap') {
      flag = 2;
    } else if (etarget == 'stop') {
      flag = 3;
    } else if (etarget == 'play') {
      flag = 0;
      startStopWatch();
    }
  }
  
  function startStopWatch() {
    flag=0;
    var show, minutes, seconds, milli,lapout,i=1;
    intervalId = setInterval(function () {
      if (flag !== 1) {  //if flag is 1, the logic is stopped hence pausing the stopwatch
        minutes = Math.floor(x / 6000);
        seconds = Math.floor(x / 100);
        if (seconds >= 60) {
          seconds = seconds % 60;
        }
        milli = x % 100;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        show = minutes + " : " + seconds + " : " + milli;
        document.getElementById('count').innerHTML = show;
        if (flag == 2) { //if flag is 2,lap is shown.
          document.getElementById('lapdisp').innerHTML = "Lap " + show;
          //pushing the laps to display later;
          laps.push(show);
          flag=0;
        }
        if (flag == 3) {   //flag 3 is for stopping the stopwatch
          clearInterval(intervalId);
          document.getElementById('count').innerHTML = "00:00:00";
          
          //Displaying the laps after stopping
          laps.forEach(function(element) {
            lapout=lapout+"\nLAP"+i+": "+element;
            i++;
          });
          document.getElementById('lapdisp').innerHTML = lapout;
        }
        x++;
        
      }
    }, 10);
    laps.length=0;//Clearing the laps
  }
  

  
  
  

