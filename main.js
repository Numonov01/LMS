// darsliklar uchun
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.addEventListener("click", function () {
    const allLessonDivs = document.querySelectorAll(".videos .lessons");
    allLessonDivs.forEach((div) => {
      div.style.display = "block";
    });
    showMoreButton.style.display = "none";
  });
});

// Kitoblar uchun
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.addEventListener("click", function () {
    const allLessonDivs = document.querySelectorAll(" .downloads .books");
    allLessonDivs.forEach((div) => {
      div.style.display = "block";
    });
    showMoreButton.style.display = "none";
  });
});

// nav
document.addEventListener("DOMContentLoaded", function () {
  const shoppingCartButton = document.getElementById("shoppingCartButton");
  const favoriteButton = document.getElementById("favoriteButton");
  const personButton = document.getElementById("personButton");
  const shoppingCartOverlay = document.getElementById("shoppingCartOverlay");
  const favoriteOverlay = document.getElementById("favoriteOverlay");
  const personOverlay = document.getElementById("personOverlay");

  // shoppingCartButton tugmasini bosganda shoppingCartOverlayni ochish
  shoppingCartButton.addEventListener("click", function () {
    shoppingCartOverlay.style.display = "block";
  });

  // favoriteButton tugmasini bosganda favoriteOverlayni ochish
  favoriteButton.addEventListener("click", function () {
    favoriteOverlay.style.display = "block";
  });

  // personButton tugmasini bosganda personOverlayni ochish
  personButton.addEventListener("click", function () {
    personOverlay.style.display = "block";
  });

  // closeShoppingCartOverlay tugmasini bosganda shoppingCartOverlayni yopish
  document
    .getElementById("closeShoppingCartOverlay")
    .addEventListener("click", function () {
      shoppingCartOverlay.style.display = "none";
    });

  // closeFavoriteOverlay tugmasini bosganda favoriteOverlayni yopish
  document
    .getElementById("closeFavoriteOverlay")
    .addEventListener("click", function () {
      favoriteOverlay.style.display = "none";
    });

  // closePersonOverlay tugmasini bosganda personOverlayni yopish
  document
    .getElementById("closePersonOverlay")
    .addEventListener("click", function () {
      personOverlay.style.display = "none";
    });
});
