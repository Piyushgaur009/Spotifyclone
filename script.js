console.log("welcome to spotify");
//initialize the variables
let songsindex = 0;
let audioElement = new Audio('1.mp3');  
let masterPlay = document.getElementById('masterPlay')
let myprogressbar = document.getElementById('myprogressbar')

let songs = [
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
    {SongName: "", filePath: "",coverPath: ""},
]


 

 //handle play/pause circle
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('')
       masterPlay.classList.add('')
      
    }

    
})

 