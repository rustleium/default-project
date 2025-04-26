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

let isDragging = false;
let mouseGrabX = 0;
let mouseGrabY = 0;

titleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  mouseGrabX = e.clientX - aboutWin.offsetLeft;
  mouseGrabY = e.clientY - aboutWin.offsetTop;
  titleBar.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if(isDragging) {
    aboutWin.style.left = (e.clientX - mouseGrabX) + 'px';
    aboutWin.style.top = (e.clientY - mouseGrabY) + 'px';
    titleBar.style.cursor = 'grabbing';
  }
});

document.addEventListener('mouseup', () => {
  if(isDragging) {
    isDragging = false;
  }
  titleBar.style.cursor = 'move';
});