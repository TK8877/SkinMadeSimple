// Mobile nav toggle
function toggleNav() {
  const menu = document.getElementById('nav-menu');
  if (menu) menu.classList.toggle('open');
}

// Routine / ingredient tab switcher
function showTab(id, btn) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  // Remove active from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  // Show selected
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

// Form submission handler
function submitForm(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('email');
  const fname = document.getElementById('fname');

  // Simple validation
  if (fname && !fname.value.trim()) {
    fname.style.borderColor = '#e74c3c';
    fname.focus();
    return;
  }
  if (email && (!email.value.trim() || !email.value.includes('@'))) {
    email.style.borderColor = '#e74c3c';
    email.focus();
    return;
  }
  // Show success message
  const success = document.getElementById('form-success');
  if (success) {
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Clear inputs
    document.querySelectorAll('.form-card input, .form-card select, .form-card textarea')
      .forEach(el => el.value = '');
  }
}

// Subtle scroll-in animations
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll(
      '.card, .ing-card, .page-card, .step-item, .video-box'
    );
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = `opacity 0.45s ease ${i * 0.055}s, transform 0.45s ease ${i * 0.055}s`;
      observer.observe(el);
    });
  });
})();
