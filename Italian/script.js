// Efeito do Header no Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================= MENU MOBILE (HAMBURGUER) =================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Abre e fecha o menu ao clicar no icone
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fecha o menu automaticamente quando clica em algum link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
// ============================================================

// Ação do botão do Menu Digital
const btnMenu = document.getElementById('open-menu');

btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Acesso ao Cardápio Digital Interativo liberado!\n(Aqui abriria a versão digital real em um app ou PDF)');
});

// Manipulação do Formulário de Reserva
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    const dataFormatada = data.split('-').reverse().join('/');

    alert(`Perfetto, ${nome}! \n\nSua reserva para o dia ${dataFormatada} às ${hora} foi pré-aprovada. \nEnviaremos a confirmação final por e-mail em instantes.`);
    
    reservationForm.reset();
});

// Animação de Scroll (Fade In)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target); 
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});