import MediaPlayer from "../MediaPlayer";

function AutoPlay() {
    AutoPlay.prototype.run=function(player:MediaPlayer) {
        player.mute();
        player.play();
    };
}

export default AutoPlay;