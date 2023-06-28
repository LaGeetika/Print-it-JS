const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//CREATION DES BULLETS POINTS//
const dotsDiv = document.querySelector(".dots");
for(var i=0; i <= slides.length-1; i++) {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	if(i == 0) {
		dot.classList.add("dot_selected");
	}
	dotsDiv.appendChild(dot);
}

//AJOUT EVENT LISTENER//
let indexSlides = 0;
const bannerImg = document.querySelector('.banner-img');
const bannerTexte = document.querySelector('.banner-texte');
const bulletPoints = document.querySelectorAll('.dot');

const leftArrowElt = document.querySelector('.arrow_left');
leftArrowElt.addEventListener('click', function () {
	bulletPoints[indexSlides].classList.remove("dot_selected");
	indexSlides--;

	if(indexSlides < 0) {
		indexSlides = slides.length - 1;
	}

	bannerImg.src = "./assets/images/slideshow/" + slides[indexSlides].image;
	bannerTexte.innerHTML = slides[indexSlides].tagLine;
	bulletPoints[indexSlides].classList.add("dot_selected");
});

const rightArrowElt = document.querySelector('.arrow_right');
rightArrowElt.addEventListener('click', function () {
	bulletPoints[indexSlides].classList.remove("dot_selected");
	indexSlides++;

	if(indexSlides >= slides.length) {
		indexSlides = 0;
	}

	bannerImg.src = "./assets/images/slideshow/" + slides[indexSlides].image;
	bannerTexte.innerHTML = slides[indexSlides].tagLine;
	bulletPoints[indexSlides].classList.add("dot_selected");
});



