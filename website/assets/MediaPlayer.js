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

export default MediaPlayer;
