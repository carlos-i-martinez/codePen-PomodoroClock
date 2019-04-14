var sessionMin = 25;
var sessionSec = 0;
var breakl = 5;
var sessl = 25;

// equal to 1 if in session or 2 if on break.
var sesOrBr = 1;
var x = 0;

//variable to know if clock is running.
var clockr = false;

//var x = setInterval(myFunction, 100);
function myFunction() {    
  if(sessionMin == 0 && sessionSec == 0){
    clearInterval(x);
    document.getElementById('beep').play();
    if(sesOrBr == 1) {
      sesOrBr = 2;
      document.getElementById("timer-label").innerHTML = 'Break';
      sessionMin = breakl;
      sessionSec = 0;
      document.getElementById("time-left").innerHTML = minTwoDigits(breakl)+':'+minTwoDigits(0);
    }
    else if(sesOrBr == 2) {
      sesOrBr = 1;
      document.getElementById("timer-label").innerHTML = 'Session';
      sessionMin = sessl;
      sessionSec = 0;
      document.getElementById("time-left").innerHTML = minTwoDigits(sessl)+':'+minTwoDigits(0);
    }
    x = setInterval(myFunction, 1000);
  }
  
  else if(sessionSec == 0) {
      sessionMin--;
      sessionSec = 59;
      document.getElementById("time-left").innerHTML =minTwoDigits(sessionMin)+':'+minTwoDigits(sessionSec);
  }
  else {
    sessionSec--;
    document.getElementById("time-left").innerHTML =minTwoDigits(sessionMin)+':'+minTwoDigits(sessionSec);
  }
}
function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

function incLength(b) {
  if(clockr == false) {
    if(b == 1) {
      if(breakl < 60) {
        breakl++;
        document.getElementById("break-length").innerHTML = breakl;   
      }
      if( sesOrBr == 2) {
        document.getElementById("time-left").innerHTML = minTwoDigits(breakl)+':'+minTwoDigits(0);
        sessionMin = sessl;
        sessionSec = 0;
      }
    }
    if(b == 2) {
      if(sessl < 60) {
        sessl++;
        document.getElementById("session-length").innerHTML = sessl;   
      }    
      if( sesOrBr == 1) {
        document.getElementById("time-left").innerHTML = minTwoDigits(sessl)+':'+minTwoDigits(0);
        sessionMin = sessl;
        sessionSec = 0;
      }
    }
  }
}

function decLength(b) {
  if(clockr == false) {
    if(b == 1) {
      if(breakl > 1) {
        breakl--;
        document.getElementById("break-length").innerHTML = breakl;   
      }
      if( sesOrBr == 2) {
        document.getElementById("time-left").innerHTML = minTwoDigits(breakl)+':'+minTwoDigits(0);
        sessionMin = breakl;
        sessionSec = 0;
      }
    }
    if(b == 2) {
      if(sessl > 1) {
        sessl--;
        document.getElementById("session-length").innerHTML = sessl;   
      }
      if( sesOrBr == 1) {
        document.getElementById("time-left").innerHTML = minTwoDigits(sessl)+':'+minTwoDigits(0);
        sessionMin = sessl;
        sessionSec = 0;
      }
    }
  }
}

function startStop() {
  if(clockr == false) {
    x = setInterval(myFunction, 1000);
    clockr = true;
  }
  else {
    clearInterval(x);
    clockr = false;
  }  
}

function reset() {
    clearInterval(x);
    var a = document.getElementById('beep');
    a.pause();
    a.currentTime = 0;
    clockr = false;
    sesOrBr = 1;
    sessionMin = 25;
    sessionSec = 0;
    breakl = 5;
    sessl = 25;
    document.getElementById("session-length").innerHTML = sessl;
    document.getElementById("break-length").innerHTML = breakl;
    document.getElementById("timer-label").innerHTML = 'Session';  
    document.getElementById("time-left").innerHTML = minTwoDigits(sessl)+':'+minTwoDigits(0);
}