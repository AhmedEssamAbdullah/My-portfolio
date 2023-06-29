const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', (e) => {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList.remove('active-btn');
      e.target.classList.add('active-btn');
    });
  }
  //Section click active
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      //hide other sections
      sections.forEach((sections) => {
        sections.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  //Toggle Theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

PageTransitions();
