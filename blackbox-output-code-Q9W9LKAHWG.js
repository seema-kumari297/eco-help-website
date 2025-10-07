// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Quiz Function (Placeholder - Expand as needed)
function startQuiz() {
    alert('Quiz starting! Question 1: What is opportunity cost? (A) Direct cost (B) Best alternative forgone\nAnswer: B\n(Integrate a full quiz library here.)');
}

// Career Tip Function (Placeholder)
function showTip() {
    const tips = [
        "Connect with alumni on LinkedIn for mentorship.",
        "Quantify achievements on your resume, e.g., 'Analyzed data reducing costs by 15%'.",
        "Prepare for behavioral interviews with STAR method."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert('Quick Tip: ' + randomTip);
}