// Animación de barras de habilidades al hacer scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.fill');
            fills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Mostrar/Ocultar demos interactivas
document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('href');
        const demoContainer = document.querySelector(targetId);
        
        // Cerrar otras demos
        document.querySelectorAll('.demo-container').forEach(dc => {
            if (dc !== demoContainer) dc.classList.remove('active');
        });
        
        // Toggle demo actual
        demoContainer.classList.toggle('active');
        
        // Cambiar texto del botón
        if (demoContainer.classList.contains('active')) {
            btn.textContent = 'Ocultar Demo';
        } else {
            btn.textContent = 'Ver Demo';
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});