"use strict";

const sections = document.querySelectorAll("section");

//Tager fat om broweservinduet
window.onscroll = () => {
  sections.forEach((sec) => {
    //Får nuværende scrollposition
    let scrollDistance = window.scrollY;
    //Får sektionens position ift. toppen af dokumentet
    let secDistance = sec.offsetTop;

    //Hvis sektionen er kommet ind i synsfeltet, tilføjes der "show-animate", eller fjernes den
    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const sectionOne = document.querySelector(".sec1");

sectionOne.addEventListener("mouseover", function () {
  this.classList.add("scale");
});

sectionOne.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});

//HORSE
const soundHorse = new Audio();
soundHorse.src = "../sound/horse.wav";

const horseElem = document.getElementById("horseElem");

if (horseElem) {
  horseElem.addEventListener("click", function () {
    soundHorse.play();

    horseElem.classList.remove("animate");
    horseElem.classList.toggle("anim-scale");
  });
}

//BEAR
const soundBear = new Audio();
soundBear.src = "../sound/bear.wav";

const bearElem = document.getElementById("bearElem");

if (bearElem) {
  bearElem.addEventListener("click", function () {
    soundBear.play();
    bearElem.classList.remove("animate");
    bearElem.classList.toggle("anim-rotate");
  });
}

//DOG
const soundDog = new Audio();
soundDog.src = "../sound/dog.wav";

const dogElem = document.getElementById("dogElem");

if (dogElem) {
  dogElem.addEventListener("click", function () {
    soundDog.play();
    dogElem.classList.remove("animate");
    dogElem.classList.toggle("anim-skew");
  });
}

//Elephant
const elephantElem = document.getElementById("elephantElem");

if (elephantElem) {
  elephantElem.addEventListener("click", function () {
    elephantElem.classList.remove("animate");
    elephantElem.classList.toggle("anim-flip");
  });
}
