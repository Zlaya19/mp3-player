const preSong = document.getElementById('preFile');
const lastSong = document.getElementById('nextFile');
const audio =  document.getElementById('audio');
const body = document.getElementsByTagName('body')[0];
const play = document.getElementById('play');
const btnTheme = document.getElementById('darkTheme');
const container = document.getElementById('container');
const topContainer = document.getElementById('topContainer');
const spanHeadline = document.getElementById('spanHeadline');

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
    preSong.style.color = bgColor[songIndex];
    lastSong.style.color = bgColor[songIndex];
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


  btnTheme.addEventListener('click', () => {
    
    container.style.background = '#333'
    container.style.boxShadow = '0 0 25px #111, inset 0 0 10px #111';
    container.style.border = '5px solid #333';
    container.style.transition = '1.5s';
    topContainer.style.background = 'rgb(56,56,56)';
    topContainer.style.boxShadow = '0 0 15px #111';
    
    play.style.border = '5px solid #444';
    play.style.boxShadow = '0 0 15px #111, inset 0 0 8px #333';
    
    preSong.style.background = '#333';
    preSong.style.border = '#111';
    preSong.style.boxShadow = '0 0 15px #111';
    
    lastSong.style.border = '#111';
    lastSong.style.background = '#333';
    lastSong.style.boxShadow = '0 0 15px #111';
    
    audio.classList.add('currentPartDark');
    spanHeadline.classList.add('spanDark');
  });