const preSong = document.getElementById('repFile');
const lastSong = document.getElementById('lastFile');
const audio =  document.getElementById('audio');

let songIndex = 0;

const songs = ['Kalimba','MaidwiththeFlaxenHair','SleepAway'];


loadSong(songs[songIndex]);

function loadSong(song){
    audio.src = `audio/${song}.mp3`;
}

/* preSong.addEventListener('click', () => {
    songIndex++
    if( songIndex > songs.length - 1){
        songIndex = 0;
    }
})
 */

// Previous song
function preSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  
  }
  
  // Next song
  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
  }