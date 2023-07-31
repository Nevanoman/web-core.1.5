const swiper = new Swiper('.swiper', {
	breakpoints: {
		0: {
			slidesPerView: 1,
			enabled: true,
		},
		768: {
			enabled: false,
		}
	},

	pagination: {
		el: '.swiper-pagination',
	},
});

let showMore = document.querySelector('.show-more');

showMore.addEventListener('click', () => {
	let hiddenButton = document.querySelectorAll('[data-hidden="true"]');
	let hiddenPcButton = document.querySelectorAll('[data-hidden-pc="true"]');

	hiddenButton.forEach(element => {
		element.classList.toggle('hidden');
	});
	hiddenPcButton.forEach(element => {
		element.classList.toggle('hidden-pc');
	});

	if (showMore.classList.contains("show-more--decoration-rotate")) {
		showMore.textContent = "Показать все";
		showMore.classList.remove("show-more--decoration-rotate");

	} else {
		showMore.textContent = "Скрыть";
		showMore.classList.add("show-more--decoration-rotate");
	}

})
