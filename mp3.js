const preSong = document.getElementById('preFile');
const lastSong = document.getElementById('nextFile');
const audio =  document.getElementById('audio');
const body = document.getElementsByTagName('body')[0];
const play = document.getElementById('play');

let songIndex = 0;

// song titles array

const songs = ['Kalimba','Maid with the Flaxen Hair','Sleep Away'];

// font and background color arrays

const bgColor = ['#ADD8E6','#C89D7C','#FFD580'];
const fontColor = ['#E0FFFF','#FBD0AF','#FFFFB3'];


loadSong(songs[songIndex]);

//  The loadLong function generates the song title, the background and font color and also the transition

function loadSong(song){
    audio.src = `audio/${song}.mp3`;
    play.innerHTML = songs[songIndex];
    play.style.background = bgColor[songIndex];
    play.style.color = fontColor[songIndex];
    body.style.background = bgColor[songIndex];
    body.style.transition = '1s';
}

// Event listener for previous and next song

preSong.addEventListener('click', prevSong);
lastSong.addEventListener('click', nextSong);


// Previous song
function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);

    setTimeout(() => {
      audio.play();
    }, 500);
    
  }
  
  // Next song
  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);

    setTimeout(() => {
      audio.play();
    }, 500);
  
  }
