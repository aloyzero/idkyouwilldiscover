const playButton = document.getElementById('play-btn');
const audio = document.getElementById('audio');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    } else {
        audio.pause();
        playButton.innerHTML = '&#9658;'; // Play icon
    }
});
