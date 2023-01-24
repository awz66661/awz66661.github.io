const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("AMPM");

function updateClock() {
  // let hour_new = new Data().getHours();
  // let minutes_new = new Data().getMinutes();
  // let seconds_new = new Data().getMinutes();
  let hour_new = new Date().getHours();
  let minutes_new = new Date().getMinutes();
  let seconds_new = new Date().getSeconds();
  let ampm = "AM";

  if (hour_new > 12) {
    hour_new = hour_new - 12;
    ampm = "PM";
  }
  if (hour_new < 10) {
    hour_new = "0" + hour_new;
  }
  if (seconds_new < 10) {
    seconds_new = "0" + seconds_new;
  }


  hourE1.innerText = hour_new;
  minutesE1.innerText = minutes_new;
  secondsE1.innerText = seconds_new;
  ampmE1.innerText = ampm;
  setTimeout(() => { updateClock() }, 1000);
}

updateClock();