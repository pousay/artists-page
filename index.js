var bnbtn = document.querySelector(".banr-menu-btn");
var banrmenu = document.querySelector(".banr-menu");
var volbtn = document.querySelector(".vol-up");
var volMenu = document.querySelector(".playing-song-volume-control");
bnbtn.addEventListener("click", () => {
  banrmenu.classList.toggle("hide");
});

volbtn.addEventListener("click", () => {
  volMenu.classList.toggle("hide");
  volbtn.classList.toggle("clicked");
});
