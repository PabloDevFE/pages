document.addEventListener('DOMContentLoaded', () => {

    // 1. Efeito do Header no Scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Menu Mobile (Hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        // Alterna ícone entre barras e X
        const icon = menuToggle.querySelector('i');
        if(navLinks.classList.contains('nav-active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            header.classList.add('scrolled'); // Garante fundo branco no menu aberto
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            if(window.scrollY <= 50) {
                header.classList.remove('scrolled');
            }
        }
    });

    // Fechar menu ao clicar em um link (Mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Animação de Scroll Reveal (Surgimento dos elementos)
    const revealElements = document.querySelectorAll('.reveal');

    const revealFunction = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Ponto de aparição

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Executa a função ao dar scroll e no carregamento da página
    window.addEventListener('scroll', revealFunction);
    revealFunction(); 
});