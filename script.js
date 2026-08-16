// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal for sections
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const sections = document.querySelectorAll('.section');
if (reduceMotion) {
  sections.forEach(s => s.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
}

// Terminal typing effect for the final command line
const typedCmdEl = document.getElementById('typedCmd');
const cursorEl = document.getElementById('cursor');
const commandToType = 'open ./contact';

if (typedCmdEl && !reduceMotion) {
  let i = 0;
  const typeSpeed = 90;

  function typeChar() {
    if (i < commandToType.length) {
      typedCmdEl.textContent += commandToType.charAt(i);
      i++;
      setTimeout(typeChar, typeSpeed);
    }
  }

  // slight delay before typing begins
  setTimeout(typeChar, 600);
} else if (typedCmdEl) {
  typedCmdEl.textContent = commandToType;
}
