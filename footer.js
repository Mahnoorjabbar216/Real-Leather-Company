document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.toggle-dropdown').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const dropdown = this.nextElementSibling;
      const arrow = this.querySelector('.arrow1');
      const isOpen = dropdown.style.display === 'block';

      // Toggle only this dropdown
      if (isOpen) {
        dropdown.style.display = 'none';
        arrow?.classList.remove('active');
      } else {
        dropdown.style.display = 'block';
        arrow?.classList.add('active');
      }
    });
  });

  // Close on '×' button click
  document.querySelectorAll('.close-dropdown').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      const dropdown = this.closest('.dropdown-menu');
      dropdown.style.display = 'none';
      const toggle = dropdown.previousElementSibling;
      const arrow = toggle?.querySelector('.arrow1');
      if (arrow) arrow.classList.remove('active');
    });
  });
});
