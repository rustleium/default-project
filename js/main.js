const aboutIcon = document.getElementById('aboutIcon');
const aboutWin = document.getElementById('aboutWindow');
const closeWin = document.querySelector('.closeBtn');
const titleBar = document.querySelector('.titleBar');

aboutIcon.addEventListener('click', () => {
  aboutWin.style.display = "block";
})

closeWin.addEventListener('click', () => {
  aboutWin.style.display = "none";
})

titleBar.addEventListener('mousedown', () => {

});

titleBar.addEventListener('mousemove', () => {

});

titleBar.addEventListener('mouseup', () => {

});