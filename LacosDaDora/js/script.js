document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Carrossel ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot'); // Pega as bolinhas
    const carousel = document.querySelector('.hero-carousel');
    let currentSlide = 0;
    const slideInterval = 4000; // 4 segundos
    let timer;

    // Função para mostrar um slide específico
    function showSlide(index) {
        // Remove a classe ativa da foto e da bolinha atual
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Garante que o índice fique dentro do limite (loop)
        currentSlide = (index + slides.length) % slides.length;
        
        // Adiciona a classe ativa na nova foto e na nova bolinha
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Funções para Avançar e Voltar
    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    // Controle do temporizador automático
    function startTimer() { timer = setInterval(nextSlide, slideInterval); }
    function resetTimer() { clearInterval(timer); startTimer(); }

    // Inicia o carrossel automático
    if(slides.length > 0) { startTimer(); }

    // Evento de clique nas bolinhas
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // Pega o número da bolinha que foi clicada (0, 1 ou 2)
            const index = parseInt(e.target.getAttribute('data-index'));
            showSlide(index); // Vai direto para a foto
            resetTimer(); // Reinicia o tempo automático
        });
    });

    // --- LÓGICA DE ARRASTE (SWIPE / DRAG) ---
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    const threshold = 50;

    // 1. Eventos de Toque (Celular/Tablet)
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        currentX = startX;
        clearInterval(timer);
    }, {passive: true});

    carousel.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
    }, {passive: true});

    carousel.addEventListener('touchend', () => {
        handleSwipe();
        startTimer();
    });

    // 2. Eventos de Mouse (Computador)
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        currentX = startX;
        clearInterval(timer);
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
    });

    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = 'grab';
        handleSwipe();
        startTimer();
    };

    carousel.addEventListener('mouseup', stopDrag);
    carousel.addEventListener('mouseleave', stopDrag);

    // Função que calcula para qual lado foi o arraste
    function handleSwipe() {
        const diff = startX - currentX;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startX = 0;
        currentX = 0;
    }

    // --- Suavidade na rolagem dos links do Menu ---
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

});