const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.mobile-menu-overlay');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

hamburger.addEventListener('click', () => {
  overlay.classList.toggle('active');

  // Toggle icon between ☰ and ×
  hamburger.textContent = overlay.classList.contains('active') ? '×' : '☰';
});

// separate close (×) inside the menu
const closeMenu = document.querySelector('.close-menu');
if (closeMenu) {
  closeMenu.addEventListener('click', () => {
    overlay.classList.remove('active');
    hamburger.textContent = '☰'; // Reset icon
  });
}

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.classList.toggle('active');
  });
});

