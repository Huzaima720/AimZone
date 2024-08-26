let levels = document.querySelectorAll("[data-level]");

let gameLevel = "easy";

levels.forEach((level) => {
  level.addEventListener("click", function (e) {
    e.preventDefault();

    gameLevel = level.dataset.level;
    window.location.href = "game.html";
  });
});

