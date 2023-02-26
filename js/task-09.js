function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
//  по кліку на button.change-color і виводить значення кольору в span.color.

const bodyEl = document.querySelector('body');

const btnEl = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const backgroundColor = getRandomHexColor();

  bodyEl.style.backgroundColor = backgroundColor;

  spanEl.textContent = backgroundColor;
});
