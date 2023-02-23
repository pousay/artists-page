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

// for handling music
// step 1 :

// first for the progress bar we get the current time and whole time of music from
// music.addEventListener("timeupdate",(e) => {
//     const {duration,currentTime} = e.srcElement
//     const persentage = (currentTime / duration) * 100
//     progressBar.style.width = `${persentage}%`
// })

//step 2 :

// second for the click on the progress div for changing
// current time of the music (like when you want to skip +15 seconds)
// progressDiv.addEvenetListner('click',(e) => {
// const WholeWidthOfDiv = this.clientWidth;
// const clickedPlace = e.offsetX
// const duration = music.duration
// music.currentTime = (clickedPlace / WholeWidthOfDiv) * duration
// })

// step 3 :
// for handling song when it ended we can use event called "ended"
