//-------------DARK-MODE-------------//
const themeButton = document.querySelector('.theme-button');
let isDark = localStorage.getItem('isDark');
if (isDark) {
  isDark = isDark == 'true';
} else {
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
}
document.body.classList.toggle('dark', isDark);
function toggleDarkTheme() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('isDark', isDark);
}
themeButton.addEventListener('click', toggleDarkTheme);

//-------------LENGUAGE-------------//
const lenguageButton = document.querySelector('.lenguage-button');

const englishElements = document.body.querySelectorAll('[lang="en"]');
const spanishElements = document.body.querySelectorAll('[lang="es"]');

spanishElements.forEach(element => {
  element.classList.add('d-none');
});

function changeLenguage() {
  englishElements.forEach(element => {
    element.classList.toggle('d-none');
  });
  spanishElements.forEach(element => {
    element.classList.toggle('d-none');
  });
}
lenguageButton.addEventListener('click', changeLenguage);

// //-------------AGE-------------//
// function getAge(dateString) {
//   const today = new Date();
//   const birthDate = new Date(dateString);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   let m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
//   return age;
// }
// document.querySelectorAll('.age')[0].textContent = getAge('1997/04/07');
// document.querySelectorAll('.age')[1].textContent = getAge('1997/04/07');

//------SCROLL-KEYFRAMES------//
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

//--------SHOW-PROJECTS-------//
const showAllButton = document.getElementById('showAllButton');
const proyectCards = document.querySelectorAll("li");

showAllButton.addEventListener('click', () => {
  proyectCards.forEach(proyect => {
    proyect.classList.remove('d-none');
    proyect.classList.add('fade-right');
    proyect.classList.add('active');
  });
  showAllButton.classList.add('d-none');
});


const upButton = document.getElementById('upButton');

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
