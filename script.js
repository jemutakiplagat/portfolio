const rightNav = document.getElementById('rightNav');
const navLinks = document.getElementById('menu');
function showMenu() {
  rightNav.style.right = '0';
}
function hideMenu() {
  rightNav.style.right = '-500px';
  rightNav.classList.remove('active');
}
rightNav.forEach((n) => n.addEventListener('click', hideMenu));

function afterClick() {
  rightNav.classList.remove('active');
}

navLinks.forEach((n) => n.addEventListener('click', afterClick));
rightNav.forEach((n) => n.addEventListener('click', showMenu));
