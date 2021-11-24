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
    btnTheme.style.color = bgColor[songIndex];
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

  let statusTheme = false;

  btnTheme.addEventListener('click', () => {

    if(statusTheme === false){
      darkTheme();
      btnTheme.innerText = '⛅️';

        preSong.addEventListener('mouseenter', () => {
          preSong.style.background = '#222';
        });

        lastSong.addEventListener('mouseenter', () => {
          lastSong.style.background = '#222';
        });

        preSong.addEventListener('mouseleave', () => {
          preSong.style.background = '#333';
        });

        lastSong.addEventListener('mouseleave', () => {
          lastSong.style.background = '#333';
        });

      statusTheme = true;
    }
    else
    {
      lightTheme();
      btnTheme.innerText = '🌙';

        preSong.addEventListener('mouseenter', () => {
          preSong.style.background = '#ddd';
        });

        lastSong.addEventListener('mouseenter', () => {
          lastSong.style.background = '#ddd';
        });

        preSong.addEventListener('mouseleave', () => {
          preSong.style.background = '#eee';
        });

        lastSong.addEventListener('mouseleave', () => {
          lastSong.style.background = '#eee';
        });

      statusTheme = false;
    }

  });

  

  function darkTheme(){

/*     btnTheme.style.background = '#333';
    btnTheme.style.border = '3px solid #333';
    btnTheme.style.boxShadow = '0 0 5px #111'; */

    container.style.background = '#333'
    container.style.boxShadow = '0 0 25px #111, inset 0 0 10px #111';
    container.style.border = '5px solid #333';
    container.style.transition = '1.5s';
    topContainer.style.background = 'rgb(56,56,56)';
    topContainer.style.boxShadow = '0 0 15px #111';
    
    play.style.border = '5px solid #444';
    play.style.boxShadow = '0 0 15px #111, inset 0 0 8px #333';
    
    preSong.style.background = '#333';
    preSong.style.border = '3px solid #333';
    preSong.style.boxShadow = '0 0 15px #111';
    
    lastSong.style.border = '3px solid #333';
    lastSong.style.background = '#333';
    lastSong.style.boxShadow = '0 0 15px #111';
    
    audio.classList.add('currentPartDark');
    spanHeadline.classList.add('spanDark');
  }

  function lightTheme(){
/* 
    btnTheme.style.background = '#fff';
    btnTheme.style.border = '3px solid #eee';
    btnTheme.style.boxShadow = '0 0 5px #aaa'; */

    container.style.background = 'linear-gradient( #ccc, whitesmoke)'
    container.style.boxShadow = '0 0 30px #999, inset 0 0 6px #999';
    container.style.border = '5px solid #fff';
    container.style.transition = '1.5s';
    topContainer.style.background = 'linear-gradient( #ccc, whitesmoke)';
    topContainer.style.boxShadow = '0 2px 14px #999, 0 2px 14px #999';
    
    play.style.border = '4px solid #eee';
    play.style.boxShadow = '0 0 14px #777, inset 0 0 14px #777';
    
    preSong.style.background = '#fff';
    preSong.style.border = '3px solid #eee';
    preSong.style.boxShadow = '0 0 14px #aaa, 0 0 14px #aaa';
    
    lastSong.style.background = '#fff';
    lastSong.style.border = '3px solid #eee';
    lastSong.style.boxShadow = '0 0 14px #aaa, 0 0 14px #aaa';
    
    audio.classList.remove('currentPartDark');
    spanHeadline.classList.add('spanDark');
  }