const video = document.querySelector("video");
const button = document.querySelector("button");

let state = false;

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
  state = true;
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
  state = false;
};

const player = new MediaPlayer({ el: video });

button.onclick = () => {
  state ? player.pause() : player.play();
};
