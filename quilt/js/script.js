
// JavaScript for interactivity
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = getRandomColor();
        item.style.transform = 'rotate(10deg)';
        setTimeout(() => {
            item.style.transform = 'rotate(0deg)';
        }, 300);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        playSound();
    });
});

function playSound() {
    const audio = new Audio('click.mp3'); // Replace with your sound file path
    audio.play();
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = getRandomColor();
    });
});
