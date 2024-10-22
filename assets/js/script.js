document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  // Toggle the menu
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("active") &&
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menu.classList.remove("active");
    }
  });
});
