const playBtn = document.getElementsByTagName("button")[1];
const audioPlayer = document.getElementsByTagName("audio")[0];
const nextBtn = document.getElementsByTagName("button")[2];
const playIcon = document.getElementsByClassName("fa-play")[0];
const pauseIcon = document.getElementsByClassName("fa-pause")[0];
const prevBtn = document.getElementsByTagName("button")[0];

const songTitle = document.getElementById("songTitle");

const playList = [
  {
    name: "UKULELE",
    src: "./songs/music-player_music_summer.mp3",
  },
  {
    name: "SUMMER",
    src: "./songs/music-player_music_ukulele.mp3",
  },
  {
    name: "Tungalag Tamir 1-1",
    src: "./songs/01_001-r Xeseg.mp3",
  },
  {
    name: "Tungalag Tamir 1-2",
    src: "./songs/01_002-r Xeseg.mp3",
  },
  {
    name: "Tungalag Tamir 1-3",
    src: "./songs/01_003-r Xeseg.mp3",
  },
];
const playListName = ["SUMMER"];
let currentSong = 0;
playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
  } else {
    audioPlayer.pause();
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
  }
  console.log("AP", audioPlayer.paused);
});

nextBtn.addEventListener("click", () => {
  currentSong++;
  if (currentSong === playList.length) {
    currentSong = 0;
  }
  audioPlayer.src = playList[currentSong].src;
  songTitle.textContent = playList[currentSong].name;
  audioPlayer.play();
  console.log("CS", currentSong);
});
prevBtn.addEventListener("click", () => {
  currentSong--;
  if (currentSong < 0) {
    currentSong = playList.length - 1;
  }
  audioPlayer.src = playList[currentSong].src;
  songTitle.textContent = playList[currentSong].name;
  audioPlayer.play();
});
