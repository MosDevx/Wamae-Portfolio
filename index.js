const menuBars = document.querySelector('.menu-bars');
const menuClose = document.querySelector('.menu-close');
const navMenu = document.querySelector('.mobile-nav');
const mobileLinkItemList = document.querySelectorAll('.linkItem');
const src = './Assets/Data/projects.json';

// ! Unnecessary code duplication next two blocks. find a better method
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

mobileLinkItemList.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    navMenu.classList.remove('show-mobile-nav');
    menuClose.classList.toggle('hide-element');
    menuBars.classList.toggle('hide-element');
  });
});

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
    <button data-id="${index}" class="btn project-card-button">See Project</button>
  </div>
</section>
  `;
  projectsContainer.innerHTML += content;

  const ulOriginal = document.getElementById(`ul-${index}`);
  ulOriginal.replaceWith(ulElement);
});

// get list of project buttons & add event listener

const projectButtonList = document.querySelectorAll('.project-card-button');
// where modal parent will be attached
const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modal-overlay');
const { body } = document;

function showModal() {
  modalContainer.classList.add('show-modal-container');
  modalOverlay.classList.add('show-modal-overlay');
  body.style.overflow = 'hidden';
}

function hideModal() {
  modalContainer.classList.remove('show-modal-container');

  modalOverlay.classList.remove('show-modal-overlay');
  body.style.overflow = 'auto';
}

// add an event listener to close the modal ,when the overlay isclicked
modalOverlay.addEventListener('click', () => {
  hideModal();
});

// open a modal and add it to html. function called by button event listener,& right and
// left buttons of modal.

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
    <div class="modal-image-div">
      <div id="close-icon">
      <i  class="fa-solid fa-xmark icon-close fa-2xl"></i>
      </div>
      <img class="modal-image" src="${project.imageUrlModal}" alt="${project.imageAlt}" />
      <button class="modal-nav-button modal-left-button"><i class="fa-solid fa-angle-left"></i></button>
      <button class="modal-nav-button modal-right-button"><i class="fa-solid fa-angle-right"></i></i></button>
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
        <button class="btn modal-button"><a class="modal-link" href="${project.linkToLive}" target="_blank" ><span>See Live  </span><i class="fa-solid fa-lg fa-arrow-up-right-from-square"></i></a></button>
        <button class="btn modal-button"><a class="modal-link" href="${project.linkToSource}" target="_blank" ><span>See Source  </span><i class="fa-brands fa-lg fa-github"></i></a></button>
     
  
      </div>
      
    </div>
  </section>
    `;
    // get reference to dummy techlist ul and replace with dynamic techlist ul

  modalContainer.innerHTML = content;
  const originalUl = document.getElementById('original-ul');
  originalUl.replaceWith(ulElement);

  showModal();
  // get a reference to the close icon button on modal and an event listener to close it.
  const closeIcon = document.getElementById('close-icon');
  closeIcon.addEventListener('click', () => {
    hideModal();
  });

  // get ref to left/right nav button add event listeners to navigate
  const modalLeft = document.querySelector('.modal-left-button');
  const modalRight = document.querySelector('.modal-right-button');

  if (projectIndex === 0) {
    modalLeft.style.display = 'none';
  } else {
    modalLeft.addEventListener('click', () => {
      openModal(projectIndex - 1);
    });
  }
  if (projectIndex === projects.length - 1) {
    modalRight.style.display = 'none';
  } else {
    modalRight.addEventListener('click', () => {
      openModal(projectIndex + 1);
    });
  }
}

// add eventlistener to project card buttons
projectButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = parseInt(button.dataset.id, 10);
    openModal(projectId);
  });
});

// validation of email input

const form = document.getElementById('contact-form');
const emailInput = form.elements.email;
const nameInput = form.elements.name;
const messageInput = form.elements.message;
const errorField = document.getElementById('error-message');

function isLowerCase(email) {
  return email === email.toLowerCase();
}

function isFormValid() {
  if (emailInput.value && nameInput.value && messageInput.value) {
    return true;
  }
  return false;
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

// underlining correct nav link based on current visible section
const sectionList = document.querySelectorAll('body > section');
const desktopNavLinkList = document.querySelectorAll('.desktop-nav-link');
const desktopHeader = document.getElementById('desktop-header');
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// function that hides the navbar when scrolling down, reappears when scrolling up
let lastScrollStop = 0;

function hideNavBar() {
  const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollOffset > lastScrollStop) {
    // downscroll
    desktopHeader.classList.add('hide-header');
  } else {
    // upsscroll
    desktopHeader.classList.remove('hide-header');
  }
  lastScrollStop = scrollOffset <= 0 ? 0 : scrollOffset;
}

// changes the current underlined navlink bassed on section in view on desktop view.
function changeNavHighlight() {
  sectionList.forEach((section) => {
    const rect = section.getBoundingClientRect();

    // check if top of section is above halfway point of screen && check
    // that bottom of section is below halfway point of screen
    if (rect.top <= vh / 2 && rect.bottom >= vh / 2) {
      const sectionId = section.getAttribute('id');

      desktopNavLinkList.forEach((navLink) => {
        if (sectionId === navLink.getAttribute('href').replace('#', '')) {
          navLink.classList.add('underline-current-nav');
        } else {
          navLink.classList.remove('underline-current-nav');
        }
      });
    }
  });
}
window.addEventListener('scroll', () => {
  changeNavHighlight();
  hideNavBar();
});

// making a dodgy form submit button: it dodges the mouse till the form inputs are correct

const formButtonDiv = document.getElementById('form-button-div');
const formButton = document.getElementById('form-button');

const formButtonDivRect = formButtonDiv.getBoundingClientRect();
const formButtonDivWidth = formButtonDivRect.width;
const formButtonRect = formButton.getBoundingClientRect();
const formButtonWidth = formButtonRect.width;

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonDodger() {
  //! get positon of element after a transform. using it but important for future use
  const compStyles = window.getComputedStyle(formButton);
  const currTransform = new DOMMatrix(compStyles.getPropertyValue('transform'));

  const buttonLeftBorder = formButton.offsetLeft + currTransform.m41;

  const buttonRightBorder = buttonLeftBorder + formButtonWidth;

  if ((buttonRightBorder + formButtonWidth) < formButtonDivWidth) {
    // move button to right
    const availableFlexSpace = formButtonDivWidth - (buttonRightBorder + formButtonWidth);
    const newPosition = formButtonWidth + getRandomValue(0, availableFlexSpace) + buttonLeftBorder;
    formButton.style.transform = `translateX(${newPosition}px)`;
  } else if ((buttonLeftBorder - formButtonWidth) >= 0) {
    // move button to left
    const availableFlexSpace = buttonLeftBorder - formButtonWidth;
    const newPosition = buttonLeftBorder - formButtonWidth - getRandomValue(0, availableFlexSpace);
    formButton.style.transform = `translateX(${newPosition}px)`;
  }
}

formButton.addEventListener('mouseover', () => {
  if (!isFormValid()) {
    errorField.innerHTML = ' *Please fill in all the fields :)';
    setTimeout(() => {
      errorField.innerHTML = '';
    }, 4000);
    buttonDodger();
  } else {
    errorField.innerHTML = '';
  }
});
