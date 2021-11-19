'use strict';

document.addEventListener("DOMContentLoaded", function() { 

  function headerMenu () {
    let headerArrow = document.querySelector('.headerMenuArrow')
    let header = document.querySelector('.header')
    headerArrow.addEventListener('click', toggleMenu);
    function toggleMenu () {
      header.classList.toggle("header--hide");
    }
  }

  function slider() {
    let slideIndex = 1;
    showSlides(slideIndex);
    let dots = document.getElementsByClassName('sliderDots__item')

    function nextSlide() {
      showSlides(slideIndex += 1);
    }

    function prevSlide () {
      showSlides(slideIndex -= 1);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    // main function
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName('slider__item');
      let dots = document.getElementsByClassName('sliderDots__item')
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    }

    function prevArrow () {
      let prevArrow = document.querySelector('.slider__arrowLink--prev')
      prevArrow.addEventListener('click', prevSlide);
    }

    function nextArrow () {
      let nextArrow = document.querySelector('.slider__arrowLink--next')
      nextArrow.addEventListener('click', nextSlide);
    }

    function dotsNavigation () {
      for(let i = 0; i < dots.length; i++) {
        let currentDot = dots[i];
        currentDot.addEventListener('click', () => currentSlide(i + 1))
      }
    }
    
    prevArrow();
    nextArrow();
    dotsNavigation();
    // setInterval(() => nextSlide(), 3000)
  }


  headerMenu ();
  slider();
});