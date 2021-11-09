const preSong = document.getElementById('preFile');
const lastSong = document.getElementById('nextFile');
const audio =  document.getElementById('audio');
const body = document.getElementsByTagName('body')[0];
const play = document.getElementById('play');

let songIndex = 1; console.log(songIndex)

const songs = ['Kalimba','Maid with the Flaxen Hair','Sleep Away'];
const bgColor = ['#C89D7C','#ADD8E6','#FFD580'];


loadSong(songs[songIndex]);

function loadSong(song){
    audio.src = `audio/${song}.mp3`;
    play.innerHTML = songs[songIndex];
    play.style.background = bgColor[songIndex];
    play.style.color = bgColor[songIndex];
    body.style.background = bgColor[songIndex];
    body.style.transition = '1s';
}

preSong.addEventListener('click', prevSong);
lastSong.addEventListener('click', nextSong);



// Previous song
function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);

    audio.play();
  
  }
  
  // Next song
  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);

    audio.play();
  
  }
