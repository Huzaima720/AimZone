let canvas = document.querySelector(".canvas");
let health = document.querySelector(".health");
let hearts = document.querySelectorAll(".fa-heart");
let ball = document.querySelector(".ball");

let hits = 0;
let miss = 0;
let hitsCount = document.querySelector(".hits .count");

function generateBall() {
  ball.style.left = Math.floor(Math.random() * 90) + "%";
  ball.style.top = Math.floor(Math.random() * 90) + "%";
  ball.style.backgroundColor = `hsl( ${Math.floor(
    Math.random() * 360
  )} , 100% , 74% )`;
}

generateBall();


canvas.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target == ball) {
    hits++;
    hitsCount.innerText = hits;
    generateBall();
  }

  if (e.target != ball) {
    console.log("miss");
    hearts[miss].classList.add("dead");
    miss++;
    if (miss === 3) {
      localStorage.setItem("hits", hits);
      console.log(hits);
      window.location.href = "game-over.html";
    }
  }
});





let restart = document.querySelector("#restart");

restart.addEventListener("click", (e) => {
  e.preventDefault();
  hits = 0;
  hitsCount.innerText = hits;
  generateBall();
});

let fullScreen = document.querySelector("#fullScreen");

function openFullscreen() {
  let elem = document.documentElement; 

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}


fullScreen.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("fullScreen");
  openFullscreen();
  fullScreen.style.display = "none";
  minimize.style.display = "block";
});

minimize = document.querySelector("#minimize");

minimize.addEventListener("click", (e) => {
  e.preventDefault();
  closeFullscreen();
  fullScreen.style.display = "block";
  minimize.style.display = "none";
});
