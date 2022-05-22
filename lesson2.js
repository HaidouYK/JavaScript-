let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let milliseconds100 = 0;  // 10分の1秒
let seconds = 0;  // 1秒
let minutes= 0;  // 1分
let hours = 0;  // 1時間

let timerID;

function stopWatch(){
  milliseconds100++;
  if(milliseconds100/10 == 1){
    seconds++;
    milliseconds100 = 0;
    if(seconds/60 == 1){
      minutes++;
      seconds = 0;
      if(minutes/60 == 1){
        hours++;
        minutes = 0;
      }
    }
  }
  
  timer.innerHTML = hours + "<span>:</span>" + minutes + "<span>:</span>" + seconds + "<span>:</span>" + milliseconds100
}

  start.addEventListener("click", function(){
  let timerID = setInterval(stopWatch, 100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
})

stop.addEventListener("click", function(){
  clearInterval(timerID);
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = false;
})

reset.addEventListener("click", function(){
  clearInterval(timerID);
  timer.innerHTML = "0<span>:</span>0<span>:</span>0<span>:</span>0";
  stop.disabled = true;
  reset.disabled = true;
  start.disabled = false;
})