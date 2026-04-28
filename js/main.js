// ── TABS (Specs section) ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.specs-content').forEach(c => c.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById('tab-' + tab).classList.remove('hidden');
  });
});

// ── MOBILE NAV ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

hamburger && hamburger.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:rgba(10,10,11,0.97);padding:1.5rem 2rem;gap:0;border-bottom:1px solid rgba(255,255,255,0.07);backdrop-filter:blur(12px);z-index:99';
  navCta.style.cssText = open ? '' : 'display:inline-flex;position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:99;width:calc(100% - 4rem);justify-content:center';
  if (!open) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.style.cssText = 'padding:1rem 0;font-size:1.1rem;border-bottom:1px solid rgba(255,255,255,0.05)';
    });
  }
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.style.cssText = '';
    navCta.style.cssText = '';
  });
});

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .spec-group, .pricing-card, .faq-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.06) + 's';
  revealObserver.observe(el);
});

// ── NAV ACTIVE STATE ON SCROLL ──
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + id
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── SMOOTH NAV HIDE ON SCROLL DOWN ──
let lastY = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 80) {
    nav.style.transform = y > lastY ? 'translateY(-100%)' : 'translateY(0)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  nav.style.transition = 'transform 0.3s ease';
  lastY = y;
}, { passive: true });
