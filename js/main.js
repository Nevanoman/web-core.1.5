const options = {
	speed: 1000,
	loop: true,
	updateOnWindowResize: true,

	breakpoints: {
		0: {
			slidesPerView: 1,
			enabled: true,
		},
		320: {
			slidesPerView: 1.3,
			enabled: true,
		},
		360: {
			slidesPerView: 1.47,
			enabled: true,
		},
		390: {
			slidesPerView: 1.6,
			enabled: true,
		},
		420: {
			slidesPerView: 2,
			enabled: true,
		},
		768: {
			enabled: false,
		},
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
};

let swiper = new Swiper(".swiper", options);

let showMore = document.querySelector(".show-more");

showMore.addEventListener("click", () => {
	let hiddenButton = document.querySelectorAll('[data-hidden="true"]');
	let hiddenPcButton = document.querySelectorAll('[data-hidden-pc="true"]');

	hiddenButton.forEach((element) => {
		element.classList.toggle("hidden");
	});

	hiddenPcButton.forEach((element) => {
		element.classList.toggle("hidden-pc");
	});

	if (showMore.classList.contains("show-more--decoration-rotate")) {
		showMore.textContent = "Показать все";
		showMore.classList.remove("show-more--decoration-rotate");
	} else {
		showMore.textContent = "Скрыть";
		showMore.classList.add("show-more--decoration-rotate");
	}
});

window.addEventListener("orientationchange", () => {
	swiper.destroy();
	swiper = new Swiper(".swiper", options);
});