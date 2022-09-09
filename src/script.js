const dynYear = document.querySelector('#year');
if (dynYear != null) {
  dynYear.innerHTML = new Date().getFullYear();
}

//responsive nav toggler
var nav = document.querySelector('nav');
var burger = document.querySelector('nav img');
if (nav != null && burger != null) {
  //burger.src = 'src/icons/burger.svg';
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    console.log(nav.classList);
  });
}

var gallery = document.querySelector('.gallery');
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

function syncContent(syncClass) {
  fetch('../index.html')
    .then((response) => {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then((html) => {
      // Initialize the DOM parser
      var parser = new DOMParser();

      // Parse the text
      var doc = parser.parseFromString(html, 'text/html');

      // You can now even select part of that html as you would in the regular DOM
      // Example:
      // var docArticle = doc.querySelector('article').innerHTML;

      //console.log(doc);

      document.querySelector(syncClass).innerHTML =
        doc.querySelector(syncClass).innerHTML;
    })
    .catch((err) => {
      console.log('Failed to fetch page: ', err);
    });
}

// if (document.querySelector('.sync-nav') != null) {
//   syncContent('.sync-nav');
// }
// if (document.querySelector('.sync-footer') != null) {
//   syncContent('.sync-footer');
// }




if (gallery != null) {
  generate(gallery.classList[2]);
}

function gNav(sections) {
  sections.forEach((item) => {
    let link = document.createElement('a');
    link.href = item.toLowerCase() + '.html';
    link.innerHTML = item;
    let li = document.createElement('li');
    li.appendChild(link);
    let ul = document.createElement('ul');
    ul.appendChild(li);
    let img = document.createElement('img');
    img.src = 'src/icons/burger.svg';
    ul.appendChild(img);
    nav.appendChild(ul); 
  });
};

//gNav(['Home', 'About', 'Gallery', 'Contact']);
