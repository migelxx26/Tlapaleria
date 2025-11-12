// Basic enhancements
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  }));

  // Pre-fill WhatsApp CTA with a message
  const wa = document.querySelectorAll('a[href*="wa.me"]');
  wa.forEach(a => a.setAttribute('href', `https://wa.me/525520162288?text=${encodeURIComponent('Hola, necesito una cotización. Mi referencia es ' + '5520162288')}`));
});
