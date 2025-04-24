const aboutIcon = document.getElementById('aboutIcon');
const aboutWin = document.getElementById('aboutWindow');
const closeWin = document.querySelector('.closeBtn');

aboutIcon.addEventListener('click', () => {
  aboutWin.style.display = "block";
})

closeWin.addEventListener('click', () => {
  aboutWin.style.display = "none";
})