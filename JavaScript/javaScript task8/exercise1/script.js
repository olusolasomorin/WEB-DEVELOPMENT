let currentSlide = 0;
let intervalId;

const slides = document.querySelectorAll('.slide')
const pause = document.getElementById('pause')
const resume = document.getElementById('resume')

function showSlides(images) {
    slides.forEach(slide => slide.classList.remove('active'));

    currentSlide = images;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlides(currentSlide + 1);
}

function startSlide() {
    intervalId = setInterval(nextSlide, 3000);
}

function pauseSlide() {
    clearInterval(intervalId);
}

function resumeSlide() {
    startSlide();
}

pause.addEventListener('click', pauseSlide)
resume.addEventListener('click', resumeSlide)

startSlide();