// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const popupClose = document.querySelector('.popup-close');

  if (!popup || !popupClose) return;

  popupClose.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.display = 'none';
    window.location.hash = '';
  });

  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
      window.location.hash = '';
    }
  });

  window.addEventListener('hashchange', function() {
    if (window.location.hash === '#popup') {
      popup.style.display = 'flex';
    } else {
      popup.style.display = 'none';
    }
  });

  if (window.location.hash === '#popup') {
    popup.style.display = 'flex';
  }
});
