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

//-------------AGE-------------//
function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}
document.querySelectorAll('.age')[0].textContent = getAge('1997/04/07');
document.querySelectorAll('.age')[1].textContent = getAge('1997/04/07');