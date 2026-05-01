// Flip button toggle
    function toggleDetail(btn) {
      btn.classList.toggle('flipped');
      const detail = btn.closest('div').querySelector('.exp-detail');
      detail.classList.toggle('open');
    }
 
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
 
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
      });
    });
  