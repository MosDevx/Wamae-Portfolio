const menuBars = document.querySelector('.menu-bars');
const menuClose = document.querySelector('.menu-close');
const navMenu = document.querySelector('.mobile-nav');
const linkItems = document.querySelectorAll('.linkItem');
const src = './Assets/Data/projects.json';

// import file containing project details
const response = await fetch(src);
const data = await response.json();
const { projects } = data;

// Dynamically generate projects cards
const projectsContainer = document.getElementById('grid-card-display');

projects.forEach((project, index) => {
  // dynamically generate  the ul containing tech list
  const ulElement = document.createElement('ul');
  ulElement.classList.add('language-list');
  project.techList.forEach((item) => {
    const liElement = document.createElement('li');

    liElement.innerHTML = `${item}`;
    ulElement.appendChild(liElement);
  });

  const content = `
  <section class="project-card">
  <div class="project-card-image">
    <img
      src="${project.imageUrl}"
      alt="${project.imageAlt}"
    />
  </div>

  <div class="card-details">
    <h3 class="card-heading">
        ${project.name}
    </h3>
    <div class="card-languages">
        <ul id ="ul-${index}"></ul>
    </div>
    <button data-id="${index}" class="project-card-button">See Project</button>
  </div>
</section>
  `;
  projectsContainer.innerHTML = content;
  const ulOriginal = document.getElementById(`ul-${index}`);
  ulOriginal.replaceWith(ulElement);
});

// get list of project buttons & add event listener

const projectButtonList = document.querySelectorAll('.project-card-button');

// where modal parent will be attached
const modalContainer = document.getElementById('modal-container');

// open a modal and add it to html. function called by button event listener
function openModal(projectIndex) {
  const project = projects[projectIndex];

  // dynamically generate  the ul containing tech list
  const ulElement = document.createElement('ul');
  ulElement.classList.add('modal-language-list');
  project.techList.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('modal-li');

    liElement.innerHTML = `${item}`;
    ulElement.appendChild(liElement);
  });
  const content = `
    <section class="modal-card">
    <div class="modal-card-image">
      <div id="close-icon">
      <i  class="fa-solid fa-xmark icon-close fa-2xl"></i>
      </div>
      <img class="modal-image" src="${project.imageUrlModal}" alt="${project.imageAlt}" />
    </div>

    <div class="modal-details">
      <h3 class="modal-heading">
     ${project.name}
      </h3>
      <div class="modal-languages">
          <ul id="original-ul">
          </ul>
      </div>
      <p>${project.description}</p>
      <div class="modal-button-container">
        <a href="${project.linkToLive}" target="_blank" class="modal-button"><span>See Live  </span><i class="fa-solid fa-lg fa-arrow-up-right-from-square"></i></a>
        <a href="${project.linkToSource}" target="_blank" class="modal-button"><span>See Source  </span><i class="fa-brands fa-lg fa-github"></i></a>
      </div>
    </div>
  </section>
    `;
  modalContainer.innerHTML = content;
  const originalUl = document.getElementById('original-ul');
  originalUl.replaceWith(ulElement);

  // get a reference to the close icon button on modal 
  const closeIcon = document.getElementById('close-icon');
  closeIcon.addEventListener('click', () => {
    modalContainer.innerHTML = '';
  });
}

// add eventlistener to project card buttons
projectButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = button.dataset.id;
    openModal(projectId);
  });
});

// code to handle opening of mobile nav menu
menuBars.addEventListener('click', () => {
  menuBars.classList.toggle('hide-element');
  menuClose.classList.toggle('hide-element');
  navMenu.classList.toggle('show-mobile-nav');
});

menuClose.addEventListener('click', () => {
  menuBars.classList.toggle('hide-element');
  menuClose.classList.toggle('hide-element');
  navMenu.classList.toggle('show-mobile-nav');
});

// hides the nav drawer when a nav item is clicked
for (let i = 0; i < linkItems.length; i += 1) {
  linkItems[i].addEventListener('click', () => {
    navMenu.classList.remove('show-mobile-nav');
    menuClose.classList.toggle('hide-element');
    menuBars.classList.toggle('hide-element');
  });
}

// validation of email inputt

const form = document.getElementById('contact-form');
const emailInput = form.elements.email;
const errorField = document.getElementById('error-message');

function isLowerCase(email) {
  return email === email.toLowerCase();
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  if (isLowerCase(emailValue)) {
    errorField.innerText = '';
    form.submit();
    form.reset();
  } else {
    errorField.innerText = 'Please type email in lower case*';
  }
});