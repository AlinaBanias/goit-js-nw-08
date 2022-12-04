import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
}); 

function onPlay({ seconds }) {

    localStorage.setItem(STORAGE_KEY, seconds);

}
   function populateVimeo () {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    player.setCurrentTime(savedMessage || 0);
 if(savedMessage) {
    console.log(savedMessage);
    
 };
}
populateVimeo ();

