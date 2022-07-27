const dynYear = document.querySelector('#year');
if (dynYear != null) {
  dynYear.innerHTML = new Date().getFullYear();
}

//responsive nav toggler
const nav = document.querySelector('nav');
const burger = document.querySelector('nav img');
if (nav != null) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  document.querySelector('nav img').src = "src/icons/burger.svg";
}


const gallery = document.querySelector('.gallery');
function generate(path) {
  const count = Number(gallery.classList[1]) + 1;
  let imgs = [];
  for (let i = 1; i < count; i++) {
    imgs.push(i + '.jpg');
  }
  imgs.forEach((item) => {
    let img = document.createElement('img');
    img.src = path + item;
    gallery.appendChild(img);
  });
}

if (gallery != null) {
  generate(gallery.classList[2]);
}
