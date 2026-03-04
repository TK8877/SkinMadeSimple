/* Glow Guide · script.js */

/* ── Mobile nav ─────────────────── */
function toggleNav() {
  const m = document.getElementById('nav-list');
  if (m) m.classList.toggle('open');
}

/* ── Sticky header shadow ─────────── */
window.addEventListener('scroll', () => {
  const h = document.getElementById('hdr');
  if (h) h.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── Tab switcher ─────────────────── */
function showTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  if (btn)   { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
}

/* ── Form handler ─────────────────── */
function handleForm(e) {
  e.preventDefault();
  const fname    = document.getElementById('fname');
  const email    = document.getElementById('email');
  const skintype = document.getElementById('skintype');
  let ok = true;

  [fname, email, skintype].forEach(el => { if (el) el.style.borderColor = ''; });

  if (!fname || !fname.value.trim()) {
    if (fname) fname.style.borderColor = '#b02020';
    ok = false;
  }
  if (!email || !email.value.includes('@')) {
    if (email) email.style.borderColor = '#b02020';
    ok = false;
  }
  if (!skintype || !skintype.value) {
    if (skintype) skintype.style.borderColor = '#b02020';
    ok = false;
  }
  if (!ok) return;

  const box = document.getElementById('form-ok');
  if (box) {
    box.style.display = 'block';
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.querySelectorAll('.form-shell input, .form-shell select, .form-shell textarea')
      .forEach(el => el.value = '');
  }
}

/* ── Scroll-reveal animations ─────── */
document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) return;

  const els = document.querySelectorAll(
    '.card, .ing-card, .nc, .step-item, .vid-shell, .vid-aside, tbody tr'
  );

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });

  els.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = `opacity .45s ease ${i * .04}s, transform .45s ease ${i * .04}s`;
    obs.observe(el);
  });
});
