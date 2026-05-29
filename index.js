// Nav: classe "scrolled" ao fazer scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});
 
// Menu mobile toggle
const menuBtn  = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
 
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});
 
// Fechar menu ao clicar num link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
 
// Form: feedback visual simples
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Enviado ✓';
    btn.style.background = '#2e7d52';
    btn.style.borderColor = '#2e7d52';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
}
<script>
const hero = document.querySelector('.hero__img');

window.addEventListener('mousemove', (e)=>{

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  hero.style.transform =
    `scale(1.1) translate(${x}px, ${y}px)`;

});
</script>