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

// Get the modal
let modal = document.getElementById("myModal");

// Get the pause button
let pauseBtn = document.getElementById("pauseBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the pause button, open the modal
pauseBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
