function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('input');

const handleBtnCreateBoxes = document.querySelector('button[data-create]');

const handleBtnDestroyBoxes = document.querySelector('button[data-destroy]');

const divContainerForBoxes = document.querySelector('div#controls');


handleBtnCreateBoxes.addEventListener('click', ()  => {

  const amount = inputEl.value;

  createBoxes(amount);

});


function createBoxes(amount) {

const arrayOfEl = [];

let sizeOfBoxes = 30;

for(let i = 1; i <= amount; i += 1){

const divEl = document.createElement ('div');

divEl.style.height = `${sizeOfBoxes}px`;

divEl.style.width =  `${sizeOfBoxes}px`;

divEl.style.backgroundColor = getRandomHexColor();

arrayOfEl.push(divEl);

sizeOfBoxes += 10;

}

divContainerForBoxes.append(...arrayOfEl);

};


handleBtnDestroyBoxes.addEventListener('click', () => {


drstroyBoxes();


})

function drstroyBoxes(){
  divContainerForBoxes.innerHTML = '';
}