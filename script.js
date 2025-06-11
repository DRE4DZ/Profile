// Music Player Func
const playButton = document.getElementById('play-button');
const playIcon = document.getElementById('play-icon');
const playingIndicator = document.getElementById('playing-indicator');
const backgroundVideo = document.getElementById('background-video');
const backgroundAudio = document.getElementById('background-audio');
const staticBackground = document.getElementById('static-background');
const mainContent = document.getElementById('main-content');

let isPlaying = false;

playButton.addEventListener('click', toggleMusic);

function toggleMusic() {
if (isPlaying) {
// Pause music and video
backgroundVideo.pause();
backgroundAudio.pause();
playIcon.className = 'fas fa-play';
playButton.classList.remove('playing');
playingIndicator.classList.remove('active');

// Reset backgrounds and opacity
backgroundVideo.classList.remove('playing');
staticBackground.classList.remove('video-playing');
mainContent.classList.remove('video-playing');

isPlaying = false;
} else {
// Play music and video
backgroundVideo.play();
backgroundAudio.play();
playIcon.className = 'fas fa-pause';
playButton.classList.add('playing');
playingIndicator.classList.add('active');

// video background dan ubah opasitas
backgroundVideo.classList.add('playing');
staticBackground.classList.add('video-playing');
mainContent.classList.add('video-playing');

isPlaying = true;
}
}

// Profile Card efek 3d
const profileCard = document.getElementById('profile-card');

profileCard.addEventListener('mousemove', (e) => {
const rect = profileCard.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const angleX = (y - centerY) / 20;
const angleY = (centerX - x) / 20;

profileCard.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

profileCard.addEventListener('mouseleave', () => {
profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Animate skill bars
window.addEventListener('load', () => {
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
const width = bar.style.width;
bar.style.width = '0%';
setTimeout(() => {
bar.style.width = width;
}, 500);
});
});

// Handle audio/video loading err9rs
backgroundAudio.addEventListener('error', (e) => {
console.log('Audio file not found - music will be disabled');
});

backgroundVideo.addEventListener('error', (e) => {
console.log('Video file not found - using fallback or static background');
});