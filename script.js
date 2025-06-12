// === Barbearia Turbo JS ===
const form = document.getElementById("form-agendamento");
const msgEnvio = document.getElementById("msg-envio");

document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal
    ScrollReveal().reveal('#intro', { delay: 300, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('#hero', { delay: 400, origin: 'bottom', distance: '60px' });
    ScrollReveal().reveal('#galeria', { delay: 500, origin: 'left', distance: '70px' });
    ScrollReveal().reveal('#servicos', { delay: 600, origin: 'right', distance: '80px' });
    ScrollReveal().reveal('#contato', { delay: 700, origin: 'bottom', distance: '90px' });

    // Partículas
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#FFD700" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 4 },
            move: { enable: true, speed: 1 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } }
        },
        background: { color: "#0a0a0a" }
    });

    // Lightbox zoom para galeria
    const imagens = document.querySelectorAll('.galeria-grid img');
    imagens.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML = `
        <div class="lightbox-content">
          <img src="${img.src}" alt="zoom" />
        </div>`;
            document.body.appendChild(overlay);
            overlay.addEventListener('click', () => document.body.removeChild(overlay));
        });
    });

});


// === Formulário com EmailJS ===


emailjs.init("17SxTwqjMyigr3Qzx");


document.getElementById('form-agendamento').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que a página recarregue

    emailjs.sendForm('service_l21l8ry', 'template_iuay44u', this, '17SxTwqjMyigr3Qzx')
        .then(function () {
            msgEnvio.textContent = "Agendamento enviado com sucesso!";
            form.reset();
        }, (err) => {
            msgEnvio.textContent = "Erro no envio. Tente novamente.";
            console.error("Erro:", err);
        });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove('active'));
            document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
});

document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('data-target');
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // opcional: atualiza a URL sem hash
            history.pushState(null, '', window.location.pathname);
        }
    });
});
