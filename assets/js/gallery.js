const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    galleryItems.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block";
      } else if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const images = document.querySelectorAll(".gallery-item img");
const closeBtn = document.querySelector(".close-btn");

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("show");

    lightboxImage.src = image.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
  }
});
