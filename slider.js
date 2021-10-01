// Slider #1
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("work");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  session_minutes = this.value - 1;
  if (!clicked) {
    document.getElementById("minutes").innerHTML = session_minutes + 1;
  }
}

// Slider #2
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("break");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
  break_mins = this.value - 1;
}
