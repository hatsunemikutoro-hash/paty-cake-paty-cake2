const buttons = document.querySelectorAll(".sound-btn");
const audio = document.getElementById('myAudio');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        audio.src = btn.dataset.sound;
        audio.play();
    })
})

const el = document.querySelector('.n');

el.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100; // -100 a 100
    const y = Math.random() * 200 - 100;

    el.style.transform = `translate(${x}px, ${y}px)`;
});