function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
     if (e.repeat) return; 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');   
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function clickTransition(e) {
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
keys.forEach(key => key.addEventListener('click',clickTransition));

window.addEventListener('keydown',playSound);
