const container = document.querySelector('.container');
const inputBox = document.querySelector('input');
const searchBtn = document.querySelector('button');

searchBtn.addEventListener('click', () => {
  if (container.classList.toggle('active')) {
    inputBox.classList.remove('delay');
    inputBox.focus();
  } else {
    inputBox.classList.add('delay');
  }
});

//加了一个按钮的特效
//在哪里都可以用上