import MediaPlayer from "./MediaPlayer";

const video = document.querySelector("video");
const button = document.querySelector("button");

let state = false;

const player = new MediaPlayer({ el: video });

button.onclick = () => {
  state ? player.pause() : player.play();
};
