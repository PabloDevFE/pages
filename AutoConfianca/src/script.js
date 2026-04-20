// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  if (typeof lucide !== 'undefined') {
    // @ts-ignore
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu?.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu?.classList.remove('opacity-0', '-translate-y-2');
      }, 10);
      menuIcon?.setAttribute('data-lucide', 'x');
    } else {
      mobileMenu?.classList.add('opacity-0', '-translate-y-2');
      setTimeout(() => {// Alterar estilo do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu Mobile (Simples)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#2c3e50';
    navLinks.style.padding = '20px';
});

// Lógica do Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const status = document.getElementById('form-status');
    const btn = this.querySelector('button');
    
    // Simulação de envio
    btn.innerText = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        status.innerHTML = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
        status.style.color = "#2ecc71";
        
        // Limpar formulário
        this.reset();
        btn.innerText = 'Enviar Mensagem';
        btn.disabled = false;
        
        // Limpar mensagem após 5 segundos
        setTimeout(() => { status.innerHTML = ""; }, 5000);
    }, 1500);
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
        mobileMenu?.classList.add('hidden');
      }, 300);
      menuIcon?.setAttribute('data-lucide', 'menu');
    }
    // @ts-ignore
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  menuToggle?.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Reveal Animations on Scroll
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom');
  revealElements.forEach(el => observer.observe(el));

  // Handle Form Submission (Front-end only alert)
  const bookingForm = document.querySelector('form');
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sua solicitação foi recebida! (Modo Simulação)');
    // @ts-ignore
    e.target.reset();
  });
});
