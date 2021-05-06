import MediaPlayer, {foo} from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector(".movie");
const botonplay = document.querySelector("#playButton");
const botonmute = document.querySelector("#muteButton");
      
//boton.onclick = () => video.play()

const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay(), new AutoPause()
]});
botonplay.onclick = () => player.togglePlay();
botonmute.onclick = () => player.toggleMute();

('serviceWorker' in navigator)
    ? navigator.serviceWorker.register('/sw.js').catch(error=>{console.log(error.message)})
    : console.log();