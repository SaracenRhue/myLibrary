var dynYear = document.querySelector('#year');
if (dynYear != null) {
    dynYear.innerHTML = new Date().getFullYear();
}


//responsive nav toggler
const nav = document.querySelector('nav');
const burger = document.querySelector('nav img');
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
