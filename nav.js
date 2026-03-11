// Inject nav stylesheet
const navStyle = document.createElement('link');
navStyle.rel = 'stylesheet';
navStyle.href = 'style.css';
document.head.appendChild(navStyle);

fetch('nav.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  });
