// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
    document.body.appendChild(particlesContainer);
}

function removeParticles() {
    const particles = document.querySelector('.particles');
    if (particles) {
        particles.remove();
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️ Light Mode';
    createParticles();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
        createParticles();
    } else {
        removeParticles();
    }
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
function DarkMode(){
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.project').forEach(project => {
        project.classList.toggle('dark-mode');
    });
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelectorAll('h1, h2, h3, p').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    document.querySelectorAll('a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('dark-mode');
    });
    document.querySelectorAll('header, footer').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.skills-grid div').forEach(skill => {
        skill.classList.toggle('dark-mode');
    });
    
}