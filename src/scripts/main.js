let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);

    const quizSection = document.querySelector('.quiz-section');
    const toggleButton = document.getElementById('toggle-quiz');

    toggleButton.addEventListener('click', function() {
        if (quizSection.classList.contains('show')) {
            quizSection.classList.remove('show');
            toggleButton.textContent = 'Mostrar Quiz';
        } else {
            quizSection.classList.add('show');
            toggleButton.textContent = 'Esconder Quiz';
        }
    });
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
