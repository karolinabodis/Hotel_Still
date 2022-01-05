// Fixed menu background
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
	if (window.scrollY > 50) {
		navbar.style.opacity = 0.8;
	} else {
		navbar.style.opacity = 1;
	}
});

// Automatic Slideshow
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

let slideIndex = -1;
showSlides();

function showSlides() {
	// hide all images
	slides.forEach((slide) => {
		slide.style.display = "none";
		slide.classList.remove("fade");
	});

	dots.forEach((dot) => {
		dot.classList.remove("active");
	});

	slideIndex++;

	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}

	// display the current image
	slides[slideIndex].style.display = "block";
	slides[slideIndex].classList.add("fade");
	dots[slideIndex].classList.add("active");

	// change image every 5 seconds
	setTimeout(showSlides, 5000);
}
