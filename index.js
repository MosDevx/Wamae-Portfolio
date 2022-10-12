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
    <button class="project-card-button">See Project</button>
  </div>
</section>
  `;
  projectsContainer.innerHTML += content;
  const ulOriginal = document.getElementById(`ul-${index}`);
  ulOriginal.replaceWith(ulElement);
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