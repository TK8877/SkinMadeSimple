// Mobile nav toggle
function toggleNav() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  // Open if was closed
  if (!isOpen) item.classList.add('open');
}

// Routine tabs
function showRoutine(type) {
  document.querySelectorAll('.routine-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('routine-' + type);
  if (panel) panel.classList.add('active');
  event.target.classList.add('active');
}

// Form submission
function submitForm() {
  const email = document.getElementById('email');
  const fname = document.getElementById('fname');
  if (!email || !email.value.includes('@')) {
    email.style.borderColor = '#e74c3c';
    email.focus();
    return;
  }
  if (!fname || !fname.value.trim()) {
    fname.style.borderColor = '#e74c3c';
    fname.focus();
    return;
  }
  const success = document.getElementById('form-success');
  if (success) {
    success.style.display = 'block';
    // Scroll to success
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Clear form
    document.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
  }
}

// Subtle scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const animEls = document.querySelectorAll('.step-card, .visual-card, .page-card, .ing-card, .resource-card, .r-step');
  animEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    observer.observe(el);
  });
});
