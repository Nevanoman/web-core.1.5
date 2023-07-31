new Swiper('.swiper', {
	speed: 1000,
	loop: true,
	updateOnWindowResize: true,
	pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
	},
	breakpoints: {
			320: {
					slidesPerView: 1.3,
					spaceBetween: 20
			},
			360: {
					slidesPerView: 1.47,
					spaceBetween: 20
			},
			390:{
					slidesPerView: 1.65,
					spaceBetween: 20
			},
			600: {
					enabled: false
			}

	}
});

const showAllButton = document.querySelector('.brand__show-next')
const brandContainer = document.querySelector('.brand__swiper')
showAllButton.addEventListener('click', function () {
	change();
 brandContainer.classList.toggle('brand__swiper-big');
 showAllButton.classList.toggle('brand__show-next-arrows-down');
});

function change()
{
	if (showAllButton.innerText=="Показать все") showAllButton.innerText = "Скрыть";
	else showAllButton.innerText = "Показать все";
};

function updatePage (){
	if (window.innerWidth == 500){
			Swiper.update()
	}
};
setInterval(updatePage(), 1000);