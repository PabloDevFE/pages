// --- Número do WhatsApp da Loja ---
// Insira apenas os números (País + DDD + Número)
const numeroLoja = "5511999999999"; 

function openWhatsApp(mensagem) {
    const textoCodificado = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroLoja}?text=${textoCodificado}`;
    window.open(url, '_blank');
}

// --- Menu Hamburger (Mobile) ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    // Alterna o ícone
    if(hamburger.innerHTML.includes('fa-bars')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    // Mostra/Esconde os links
    navMenu.querySelector('ul').classList.toggle('nav-active');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.querySelector('ul').classList.remove('nav-active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});