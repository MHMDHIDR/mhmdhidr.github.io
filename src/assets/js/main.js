'use strict';

import { validEmail } from './validEmail.js';
import ContactUs from './contact.js';

tns({
  container: '.projects',
  items: 3,
  nav: false,
  slideBy: 'page',
  mouseDrag: true
});
const prevBtn = document.querySelector('button[data-controls="prev"]');
const nextBtn = document.querySelector('button[data-controls="next"]');
prevBtn.innerHTML = `
  <img
    class="previous project-thumbnail"
    src="public/assets/img/arrow.svg"
    alt="previous project"
  />
`;

nextBtn.innerHTML = `
  <img
    class="next project-thumbnail"
    src="public/assets/img/arrow.svg"
    alt="next project"
  />
`;

prevBtn.style.border = '0';
nextBtn.style.border = '0';

// animation onload
window.onload = () => {
  const projPreviews = document.querySelectorAll('.projects-preview a');
  projPreviews[0].style.right = projPreviews[2].style.right = '0';
  projPreviews[1].style.left = '0';
};

// scroll to section
const navLinks = document.querySelectorAll('.hero a');
navLinks.forEach((link) => {
  if (link.hasAttribute('data-link')) {
    // check if link has data-link attr
    link.addEventListener('click', (e) => {
      e.preventDefault(); // prevent reloading page
      // getting value of data-link
      const linkTarget = e.target.dataset.link;
      window.scrollTo({
        // scroll the window
        // getting top position of the Targeted element Class (50 means sp (section padding)
        // put the scroll to the top of the targeted element (-) minus 50px of padding
        top: document.getElementById(linkTarget).offsetTop - 50,
        behavior: 'smooth'
      });
    });
  }
});

// windows scrollTop button
window.addEventListener('scroll', () => {
  // scroll to the top of page function
  const scrollTop = document.querySelector('.scroll__top');
  const navFixed = document.querySelector('.navbar.fixed');

  // show and hide btn
  scrollTop.classList.toggle('active', window.scrollY > 500);

  // toggle shrink if user scrolled half hero section
  navFixed.classList.toggle(
    'shrink',
    window.scrollY > document.querySelector('.hero').clientHeight / 4
  );

  // when click scroll top
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// submit Contact Form Function
const form = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  subject: document.getElementById('subject'),
  message: document.getElementById('msg'),
  submitBtn: document.getElementById('submitBtn'),
  formMassages: document.querySelector('.form__group:last-of-type')
};
//send form
form.submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    form.name.value.trim() === '' ||
    form.email.value.trim() === '' ||
    form.subject.value.trim() === '' ||
    form.message.value.trim() === ''
  ) {
    alert('Please fill in all fields!');
  } else if (!validEmail(form.email.value.trim())) {
    alert('Please provide a valid email so I can contact you back :D');
  } else {
    ContactUs(form);
  }
});
