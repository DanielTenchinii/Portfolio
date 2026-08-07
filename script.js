document.addEventListener('DOMContentLoaded', () => {

    // Menu de navegação móvel
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Animações ao rolar a página (Intersection Observer)
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-scale');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Quando o elemento entra na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // Aciona quando 10% do elemento está visível
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Alerta de envio de formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
            contactForm.reset();
        });
    }

});