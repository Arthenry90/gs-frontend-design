let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);

    const quizSection = document.querySelector('.quiz-section');
    const toggleButton = document.getElementById('toggle-quiz');

    // Initially hide the quiz section
    quizSection.style.display = 'none';

    toggleButton.addEventListener('click', function() {
        if (quizSection.style.display === 'none') {
            quizSection.style.display = 'block';
            toggleButton.textContent = 'Esconder Quiz';
        } else {
            quizSection.style.display = 'none';
            toggleButton.textContent = 'Mostrar Quiz';
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
