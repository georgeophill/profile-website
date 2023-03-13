// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// Build out functions

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  console.log(icon)
}

function skip() {
  console.log('SKipping')
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons[data-skip].addEventListener('click', skip)

// Hook up the event listener
