// Preloader e inicialização otimizada
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none'; // Remove preloader rapidamente
    }

    // Adia o carregamento de partículas para evitar conflitos
    setTimeout(() => {
        if (typeof tsParticles !== 'undefined') {
            tsParticles.load("intro-particles", {
                particles: {
                    number: { value: 50, density: { enable: true, value_area: 800 } },
                    color: { value: ["#22C55E", "#00FFFF", "#FF00FF"] },
                    shape: { type: ["circle", "edge", "triangle"], stroke: { width: 1, color: "#22C55E" } },
                    opacity: { value: 0.6, random: true },
                    size: { value: 4, random: true },
                    line_linked: { enable: true, distance: 200, color: "#22C55E", opacity: 0.3, width: 1.5 },
                    move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "bounce" }
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "attract" },
                        onclick: { enable: true, mode: "repulse" }
                    },
                    modes: { attract: { distance: 200 }, repulse: { distance: 150 } }
                },
                retina_detect: true
            });

            tsParticles.load("particles-js", {
                particles: {
                    number: { value: 30, density: { enable: true, value_area: 800 } },
                    color: { value: ["#22C55E", "#115E59"] },
                    shape: { type: "edge", stroke: { width: 1, color: "#22C55E" } },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#22C55E", opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" }
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    },
                    modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
                },
                retina_detect: true
            }).then(() => {
                document.getElementById('particles-js').addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            });
        }
    }, 1000);

    populateTimes();

    // Animações Avançadas com Anime.js para a Intro
    anime.timeline({loop: false})
        .add({
            targets: '.holographic-logo',
            opacity: [0, 1],
            translateZ: [ -100, 0 ],
            rotateY: [ -45, 0 ],
            duration: 2000,
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.intro-title',
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 1500,
            easing: 'easeOutBounce'
        }, '-=1000')
        .add({
            targets: '.intro-subtitle',
            opacity: [0, 1],
            translateX: [-200, 0],
            duration: 1800,
            easing: 'easeOutExpo'
        }, '-=1200')
        .add({
            targets: '.floating-item',
            opacity: [0, 0.7],
            translateY: [50, 0],
            duration: 2000,
            delay: anime.stagger(300)
        }, '-=1500');

    // Parallax effect for intro
    window.addEventListener('scroll', () => {
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });

    // Reviews Carousel
    const reviewsWrapper = document.querySelector('.reviews-wrapper');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    let cards = reviewsWrapper.children.length;
    let currentIndex = 0;
    let visibleCards = getVisibleCards();
    let cardWidth = 100 / visibleCards;

    function getVisibleCards() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function moveCarousel() {
        reviewsWrapper.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
    }

    function updateCarousel() {
        cards = reviewsWrapper.children.length;
        visibleCards = getVisibleCards();
        cardWidth = 100 / visibleCards;
        if (currentIndex > cards - visibleCards) {
            currentIndex = Math.max(cards - visibleCards, 0);
        }
        moveCarousel();
    }

    if (reviewsWrapper && carouselPrev && carouselNext) {
        carouselNext.addEventListener('click', () => {
            if (currentIndex < cards - visibleCards) {
                currentIndex++;
                moveCarousel();
            }
        });

        carouselPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                moveCarousel();
            }
        });

        // Auto slide
        setInterval(() => {
            if (currentIndex < cards - visibleCards) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            moveCarousel();
        }, 5000);

        // Adjust on resize
        window.addEventListener('resize', updateCarousel);
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.navbar ul');
if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
}

// Portfolio Images
const portfolioImages = {
    cortes: [
        { src: "assets/corte1.jpg", alt: "Corte 1", size: "large" },
        { src: "assets/corte2.jpg", alt: "Corte 2", size: "medium" },
        { src: "assets/corte3.jpg", alt: "Corte 3", size: "small" },
        { src: "assets/corte4.jpg", alt: "Corte 4", size: "small" },
        { src: "assets/corte5.jpg", alt: "Corte 5", size: "medium" },
        { src: "assets/corte6.jpg", alt: "Corte 6", size: "small" },
        { src: "assets/corte7.jpg", alt: "Corte 7", size: "large" },
        { src: "assets/corte8.jpg", alt: "Corte 8", size: "small" },
        { src: "assets/corte9.jpg", alt: "Corte 9", size: "medium" },
        { src: "assets/corte10.jpg", alt: "Corte 10", size: "small" },
        { src: "assets/corte11.jpg", alt: "Corte 11", size: "large" },
        { src: "assets/corte12.jpg", alt: "Corte 12", size: "small" }
    ],
    barbas: [
        { src: "assets/barba1.jpg", alt: "Barba 1", size: "large" },
        { src: "assets/barba2.jpg", alt: "Barba 2", size: "medium" },
        { src: "assets/barba3.jpg", alt: "Barba 3", size: "small" },
        { src: "assets/barba4.jpg", alt: "Barba 4", size: "small" },
        { src: "assets/barba5.jpg", alt: "Barba 5", size: "medium" },
        { src: "assets/barba6.jpg", alt: "Barba 6", size: "small" },
        { src: "assets/barba7.jpg", alt: "Barba 7", size: "large" },
        { src: "assets/barba8.jpg", alt: "Barba 8", size: "small" },
        { src: "assets/barba9.jpg", alt: "Barba 9", size: "medium" },
        { src: "assets/barba10.jpg", alt: "Barba 10", size: "small" },
        { src: "assets/barba11.jpg", alt: "Barba 11", size: "large" },
        { src: "assets/barba12.jpg", alt: "Barba 12", size: "small" }
    ],
    combos: [
        { src: "assets/combo1.jpg", alt: "Combo 1", size: "large" },
        { src: "assets/combo2.jpg", alt: "Combo 2", size: "medium" },
        { src: "assets/combo3.jpg", alt: "Combo 3", size: "small" },
        { src: "assets/combo4.jpg", alt: "Combo 4", size: "small" },
        { src: "assets/combo5.jpg", alt: "Combo 5", size: "medium" },
        { src: "assets/combo6.jpg", alt: "Combo 6", size: "small" },
        { src: "assets/combo7.jpg", alt: "Combo 7", size: "large" },
        { src: "assets/combo8.jpg", alt: "Combo 8", size: "small" },
        { src: "assets/combo9.jpg", alt: "Combo 9", size: "medium" },
        { src: "assets/combo10.jpg", alt: "Combo 10", size: "small" },
        { src: "assets/combo11.jpg", alt: "Combo 11", size: "large" },
        { src: "assets/combo12.jpg", alt: "Combo 12", size: "small" }
    ]
};

// Helper function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Portfolio Rendering with Lazy Loading
const portfolioGrid = document.querySelector('.portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderPortfolio(filter) {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';
    let images = [];

    if (filter === 'all') {
        if (window.innerWidth <= 768) {
            const shuffledCortes = shuffleArray([...portfolioImages.cortes]).slice(0, 2);
            const shuffledBarbas = shuffleArray([...portfolioImages.barbas]).slice(0, 2);
            const shuffledCombos = shuffleArray([...portfolioImages.combos]).slice(0, 2);
            images = [...shuffledCortes, ...shuffledBarbas, ...shuffledCombos];
            images = shuffleArray(images);
        } else {
            images = [
                ...portfolioImages.cortes.slice(0, 4),
                ...portfolioImages.barbas.slice(0, 4),
                ...portfolioImages.combos.slice(0, 4)
            ];
        }
    } else {
        images = portfolioImages[filter] || [];
    }

    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('portfolio-item', image.size, 'section-transition');
        item.setAttribute('data-category', filter === 'all' ? getCategory(image.src) : filter);
        item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
        portfolioGrid.appendChild(item);
    });
    observeSections();
}

function getCategory(src) {
    if (src.includes('corte')) return 'cortes';
    if (src.includes('barba')) return 'barbas';
    if (src.includes('combo')) return 'combos';
    return 'cortes';
}

if (filterButtons) {
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });
}

renderPortfolio('all');

// Lazy Loading with Intersection Observer
function observeSections() {
    const sections = document.querySelectorAll('.section-transition');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const closeLightbox = document.querySelector('.close-lightbox');
let currentImages = [];
let currentIndex = 0;

if (portfolioGrid) {
    portfolioGrid.addEventListener('click', (e) => {
        const img = e.target.closest('img');
        if (img && lightbox) {
            const category = img.parentElement.getAttribute('data-category') || getCategory(img.getAttribute('src'));
            currentImages = portfolioImages[category] || portfolioImages.cortes;
            currentIndex = currentImages.findIndex(image => image.src === img.getAttribute('src') && image.alt === img.getAttribute('alt'));
            if (currentIndex === -1) currentIndex = 0;
            updateLightboxImage();
            lightbox.style.display = 'flex';
        }
    });
}

function updateLightboxImage() {
    if (lightboxImg && currentImages.length > 0 && currentIndex >= 0 && currentIndex < currentImages.length) {
        lightboxImg.src = currentImages[currentIndex].src;
        lightboxImg.alt = currentImages[currentIndex].alt;
    }
}

if (lightboxPrev) lightboxPrev.addEventListener('click', () => { currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; updateLightboxImage(); });
if (lightboxNext) lightboxNext.addEventListener('click', () => { currentIndex = (currentIndex + 1) % currentImages.length; updateLightboxImage(); });
if (closeLightbox) closeLightbox.addEventListener('click', () => { if (lightbox) lightbox.style.display = 'none'; });

// Smooth Scroll without Hash
document.querySelectorAll('a[data-target]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            history.pushState(null, null, window.location.pathname);
        }
        if (window.innerWidth <= 768 && navUl) navUl.classList.remove('active');
    });
});

// Modal and Form
const modal = document.getElementById('modal');
const modalForm = document.getElementById('modalForm');
const contactForm = document.getElementById('contactForm');
const closeModal = document.querySelector('.close-modal');
const modalTitle = modal ? modal.querySelector('h3') : null;
const openModalButtons = document.querySelectorAll('.servico-btn');
const notification = document.getElementById('notification');

function populateTimes() {
    const hours = [];
    for (let h = 9; h <= 23; h++) {
        hours.push(`${h.toString().padStart(2, '0')}:00`);
        if (h < 23) {
            hours.push(`${h.toString().padStart(2, '0')}:30`);
        }
    }
    const timeSelects = [document.querySelector('#time'), document.querySelector('#modal-time')];
    timeSelects.forEach(select => {
        if (select) {
            hours.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                select.appendChild(option);
            });
        }
    });
}

if (openModalButtons.length > 0) {
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (modal && modalTitle) {
                const servicoCard = button.closest('.servico-card');
                const servicoType = servicoCard.getAttribute('data-servico');
                const select = servicoCard.querySelector('.session-select');
                const packageName = select.options[select.selectedIndex].text;

                modalTitle.textContent = `Agendamento ${servicoType.charAt(0).toUpperCase() + servicoType.slice(1)}`;
                if (modalForm) {
                    modalForm.querySelector('#modal-service').value = servicoType;
                    modalForm.querySelector('#modal-package').value = packageName;
                    modalForm.querySelector('#modal-service').style.color = 'var(--text-light)';
                    modalForm.querySelector('#modal-service').selectedIndex = 0;
                }
                modal.style.display = 'flex';
            }
        });
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
        resetViewport();
    });
}

// Handle Contact Form Submission with Validation
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('#name').value;
        const phone = contactForm.querySelector('#phone').value;
        const email = contactForm.querySelector('#email').value;
        const date = contactForm.querySelector('#date').value;
        const time = contactForm.querySelector('#time').value;
        const barberName = contactForm.querySelector('#barberName').value;
        const service = contactForm.querySelector('#service').value;

        if (!name || !phone || !email || !date || !time || !barberName || !service) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('E-mail inválido.');
            return;
        }
        if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ''))) {
            alert('Telefone inválido (deve ter 10 ou 11 dígitos).');
            return;
        }
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
            alert('Data inválida. Use o formato DD/MM/AAAA.');
            return;
        }

        const select = contactForm.querySelector('#service');
        const packageName = select.options[select.selectedIndex].text;
        contactForm.querySelector('#package').value = packageName;

        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok && notification) {
                notification.style.display = 'block';
                contactForm.reset();
                showCustomNotification('Agendamento enviado com sucesso!');
                setTimeout(() => { notification.style.display = 'none'; }, 3000);
                resetViewport();
            } else {
                alert('Erro ao enviar o formulário. Verifique o endpoint do Formspree.');
            }
        }).catch(error => {
            alert('Erro ao enviar o formulário: ' + error.message);
        });
    });
}

// Handle Modal Form Submission with Validation
if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = modalForm.querySelector('#modal-name').value;
        const phone = modalForm.querySelector('#modal-phone').value;
        const email = modalForm.querySelector('#modal-email').value;
        const date = modalForm.querySelector('#modal-date').value;
        const time = modalForm.querySelector('#modal-time').value;
        const barberName = modalForm.querySelector('#modal-barberName').value;
        const service = modalForm.querySelector('#modal-service').value;

        if (!name || !phone || !email || !date || !time || !barberName || !service) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('E-mail inválido.');
            return;
        }
        if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ''))) {
            alert('Telefone inválido (deve ter 10 ou 11 dígitos).');
            return;
        }
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
            alert('Data inválida. Use o formato DD/MM/AAAA.');
            return;
        }

        const formData = new FormData(modalForm);
        fetch(modalForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok && notification && modal) {
                notification.style.display = 'block';
                modal.style.display = 'none';
                modalForm.reset();
                showCustomNotification('Agendamento enviado com sucesso!');
                setTimeout(() => { notification.style.display = 'none'; }, 3000);
                resetViewport();
            } else {
                alert('Erro ao enviar o formulário. Verifique o endpoint do Formspree.');
            }
        }).catch(error => {
            alert('Erro ao enviar o formulário: ' + error.message);
        });
    });
}

// Dicas de Estilo Rotativas
const dicasContainer = document.querySelector('.dicas-container');
const dicas = [
    { title: "Como cuidar do cabelo curto", content: "Lave a cada 2 dias com um shampoo adequado e use condicionador para manter a hidratação." },
    { title: "Estilizando a barba", content: "Aplique óleo de barba diariamente e modele com um pente para um visual impecável." },
    { title: "Escolhendo o corte ideal", content: "Considere o formato do seu rosto: oval para cortes clássicos, quadrado para desvanecimentos." }
];

function renderDica(index) {
    if (!dicasContainer) return;
    dicasContainer.innerHTML = `
        <div class="dica-card section-transition">
            <h3>${dicas[index].title}</h3>
            <p>${dicas[index].content}</p>
        </div>
    `;
    observeSections();
}

let dicaIndex = 0;
function rotateDicas() {
    renderDica(dicaIndex);
    dicaIndex = (dicaIndex + 1) % dicas.length;
}
setInterval(rotateDicas, 5000);
rotateDicas();

// Progress Bar
window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.transform = `scaleX(${progress / 100})`;
    }
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Countdown Timer
const countdownElements = document.querySelectorAll('.countdown');
if (countdownElements.length > 0) {
    countdownElements.forEach((element, index) => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + (index + 1));
        endDate.setHours(23, 59, 59, 0);

        function updateCountdown() {
            const now = new Date();
            const timeLeft = endDate - now;

            if (timeLeft <= 0) {
                element.textContent = 'Tempo Restante: Expirado';
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            element.textContent = `Tempo Restante: ${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
}

// Utility Function for Notifications
function showCustomNotification(message, element = notification) {
    if (element) {
        element.querySelector('p').textContent = message;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    }
}

// Close Notifications
document.querySelectorAll('.close-notification').forEach(close => {
    close.addEventListener('click', () => {
        const notification = close.closest('.custom-notification');
        if (notification) notification.style.display = 'none';
    });
});

// Formatação automática de data
function formatDate(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    let formatted = '';
    if (value.length > 0) formatted += value.slice(0, 2);
    if (value.length > 2) formatted += '/' + value.slice(2, 4);
    if (value.length > 4) formatted += '/' + value.slice(4);
    input.value = formatted;
}

document.getElementById('date').addEventListener('input', (e) => formatDate(e.target));
document.getElementById('modal-date').addEventListener('input', (e) => formatDate(e.target));

// Reset viewport zoom on iOS
function resetViewport() {
    const viewport = document.querySelector('meta[name="viewport"]');
    const originalContent = viewport.getAttribute('content');
    viewport.setAttribute('content', originalContent + ', maximum-scale=1.0');
    setTimeout(() => {
        viewport.setAttribute('content', originalContent);
    }, 300);
}