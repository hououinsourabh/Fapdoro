var minutes = 25;
var seconds = 00;
var clicked = false;
var fapTime = false;

var session_minutes = 24;
var session_seconds = 59;
var break_mins = 4;
var break_secs = 59;

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

function Timer(mins, secs) {
    
    if (!clicked) {
        clicked = true;
        s_minutes = mins;
        s_seconds = secs;

        document.getElementById("minutes").innerHTML = s_minutes;
        document.getElementById("seconds").innerHTML = s_seconds;

        minutes_interval = setInterval(minuteTimer, 60000);
        seconds_interval = setInterval(secondTimer, 1000);

        function minuteTimer() {
            s_minutes--;
            document.getElementById("minutes").innerHTML = s_minutes;
        }

        function secondTimer() {
            s_seconds--;
            document.getElementById("seconds").innerHTML = s_seconds;

            if (s_seconds <= 0) {
                s_seconds = 60;
                if (s_minutes <= 0) {

                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                    clicked = false;

                    if (!fapTime) {
                        Timer(break_mins, break_secs);
                        fapTime = true;
                        document.getElementById("whatTime").innerHTML = "Fap Time Lets Go";
                    } else if (fapTime) {
                        Timer(session_minutes, session_seconds);
                        fapTime = false;
                        document.getElementById("whatTime").innerHTML = "Work Time";
                    }

                }

            }
        }

    }

}

function resetTimer() {

    s_minutes = 25;
    s_seconds = 00;

    clearInterval(minutes_interval);
    clearInterval(seconds_interval);

    document.getElementById("minutes").innerHTML = session_minutes + 1;
    document.getElementById("seconds").innerHTML = 0;

    clicked = false;

}

function startTimer() {
    Timer(session_minutes, session_seconds);
}


/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

