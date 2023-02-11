let sliderIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function plusSlide() {
  sliderIndex++;
  if (sliderIndex >= totalSlides) {
    sliderIndex = 0;
  }
  showSlide(sliderIndex);
}

showSlide(sliderIndex);

setInterval(plusSlide, 3000); 
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const contact = document.querySelector('#contact');
const feedback = document.querySelector('#feedback');

const homePage = document.querySelector('#home-page');
const aboutPage = document.querySelector('#about-page');
const skillsPage = document.querySelector('#skills-page');
const contactPage = document.querySelector('#contact-page');
const feedbackPage = document.querySelector('#feedback-page');

home.addEventListener('click', () => {
  homePage.style.display = 'block';
  aboutPage.style.display = 'none';
  skillsPage.style.display = 'none';
  contactPage.style.display = 'none';
  feedbackPage.style.display = 'none';
});

about.addEventListener('click', () => {
  homePage.style.display = 'none';
  aboutPage.style.display = 'block';
  skillsPage.style.display = 'none';
  contactPage.style.display = 'none';
  feedbackPage.style.display = 'none';
});

skills.addEventListener('click', () => {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  skillsPage.style.display = 'block';
  contactPage.style.display = 'none';
  feedbackPage.style.display = 'none';
});


