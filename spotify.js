console.log('Hello world')
// Initailize the variables

let songIndex = 0;
let audioElement = new Audio('/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName : "Let me love You", filePath: "1.mp3", coverPath : "Cover_Image/1.jpg"},

    {songName : "Perfect - One Direction", filePath: "2.mp3", coverPath : "Cover_Image/2.jpg"},

    {songName : "Night Changes - One Direction", filePath: "3.mp3", coverPath : "Cover_Image/3.jpg"},

    {songName : "What's make beautiful - One Direction", filePath: "4.mp3", coverPath : "Cover_Image/4.jpg"},

    {songName : "Steal My Girl - One Direction", filePath: "5.mp3", coverPath : "Cover_Image/5.jpg"},

    {songName : "Story of my life - One Direction", filePath: "6.mp3", coverPath : "Cover_Image/6.jpg"},

    {songName : "Sorry - Justin Beiber", filePath: "7.mp3", coverPath : "Cover_Image/7.jpg"},

    {songName : "Lonely - Justin Bieber, Benny Blanco", filePath: "8.mp3", coverPath : "Cover_Image/8.jpg"},

    {songName : "One Call Away - Charlie Puth", filePath: "9.mp3", coverPath : "Cover_Image/9.jpg"},

    {songName : "See You Again - Charlie Puth", filePath: "10.mp3", coverPath : "Cover_Image/10.jpg"},


]

songsItems.forEach((element, i ) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
   
    if(songIndex>=10)
    {
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

