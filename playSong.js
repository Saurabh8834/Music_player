let songIndex = 0;
let songItem = Array.from(document.getElementsByClassName("container"));
// console.log(songItem);
let audioSound = new Audio("navbarSongs/0.mp3");
let playBtn = document.getElementById("playbtn"); 
let progressBar = document.getElementById("progressBar");
// console.log(progressBar.value);
let songs = [
    {
        sNO: "01",
        songName: "GOAT",
        songPath: "navbarSongs/0.mp3",
        songCover: "images/covers/goat.jpg",
        artistName: "Sidhu Moose Wala"
    },
    {
        sNO: "02",
        songName: "Alvida",
        songPath: "navbarSongs/1.mp3",
        songCover: "images/covers/kk-al.jpg",
        artistName: "kk"
    },
    {
        sNO: "03",
        songName: "Judge",
        songPath: "navbarSongs/2.mp3",
        songCover: "images/covers/mankirat.jpg",
        artistName: "Mankirat Aulakh"
    }
    ,
    {
        sNO: "04",
        songName: "Shayad",
        songPath: "navbarSongs/3.mp3",
        songCover: "images/covers/arijit-sh.jpg",
        artistName: "Ariit Singh"
    }
    ,
    {
        sNO: "05",
        songName: "Elevated",
        songPath: "navbarSongs/4.mp3",
        songCover: "images/covers/subh-e.jpg",
        artistName: "Subh"
    }
    ,
    {
        sNO: "06",
        songName: "Signed To God",
        songPath: "navbarSongs/5.mp3",
        songCover: "images/covers/smw.jpg",
        artistName: "Sidhu Moose Wala"
    }
    ,
    {
        sNO: "07",
        songName: "Roll In",
        songPath: "navbarSongs/6.mp3",
        songCover: "images/covers/subh-ro.jpg",
        artistName: "Subh"
    }
    ,{
      sNO: "08",
        songName: "Roll In",
        songPath: "navbarSongs/7.mp3",
        songCover: "images/covers/subh-ro.jpg",
        artistName: "Subh"
    }
];

songItem.forEach((element, index)=>{
    // console.log(element, index);
    element.querySelectorAll(".sno")[0].innerHTML = songs[index].sNO;
    element.querySelectorAll("img")[0].src = songs[index].songCover;
    element.querySelectorAll(".bold-p")[0].innerHTML = songs[index].songName;
    element.querySelectorAll(".light-p")[0].innerHTML = songs[index].artistName;

})
playBtn.addEventListener("click", ()=>{
    if(audioSound.paused || audioSound.currentTime<0){
        audioSound.play();
        playBtn.classList.add("fa-pause"); 
        playBtn.classList.remove("fa-play"); 
    }
    else{
        audioSound.pause();
        playBtn.classList.add("fa-play"); 
        playBtn.classList.remove("fa-pause"); 
    }
   
})

audioSound.addEventListener("timeupdate", ()=>{
    progres = parseInt((audioSound.currentTime/audioSound.duration)*100);
    progressBar.value = progres;
});

progressBar.addEventListener("change", ()=>{
    audioSound.currentTime = (progressBar.value * audioSound.duration) / 100;
    
})

const makesAllPlays = () => {
    Array.from(document.querySelectorAll(".songItemPlay")).forEach((element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    });
  };


Array.from(document.querySelectorAll(".songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
      makesAllPlays();
      songIndex = parseInt(e.target.id);
    //   console.log(songIndex);
      playBtn.classList.add("fa-pause");
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioSound.src = `navbarSongs/${songIndex}.mp3`;
      console.log(audioSound.src);
      audioSound.currentTime = 0;
      audioSound.play();
    });
});
  

document.getElementById("next").addEventListener("click", (e)=>{
    console.log("clicked at next");
    if(songIndex >= 6){
      songIndex = 0;
    }
    else{
      songIndex += 1;
    }
    audioSound.src = `navbarSongs/${songIndex}.mp3`;
    audioSound.currentTime = 0;
    audioSound.play();
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
  })

  document.getElementById("previous").addEventListener("click", (e)=>{
    console.log(songIndex);
    if(songIndex <= 0){
      songIndex = 6;
    }
    else{
      songIndex -= 1;
    }
    audioSound.src = `navbarSongs/${songIndex}.mp3`;
    audioSound.currentTime = 0;
    audioSound.play();
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
  })