console.log('Hello world')
// Initailize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
    {songName : "Let me love You", filePath: "1.mp3", coverPath : "Cover_Image/1.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\1.mp3", coverPath : "Cover_Image/2.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\2.mp3", coverPath : "Cover_Image/3.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\3.mp3", coverPath : "Cover_Image/4.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\4.mp3", coverPath : "Cover_Image/5.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\5.mp3", coverPath : "Cover_Image/6.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\6.mp3", coverPath : "Cover_Image/7.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\1.mp3", coverPath : "Cover_Image/8.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\1.mp3", coverPath : "Cover_Image/9.jpg"},

    {songName : "Let me love You", filePath: "G:\SpotifyProject\song\1.mp3", coverPath : "Cover_Image/10.jpg"},

]

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   
    // Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
  
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})




