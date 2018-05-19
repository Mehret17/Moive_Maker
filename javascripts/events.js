const data = require('./data');
const selectedDom = require('./selectedDom');

let elementsArray = [];

const selectedElement = (e) => {
  const clickedRadio = e.target.id;
  console.log(clickedRadio);
  const newArray = [];
  elementsArray = data.getMovieElements();
  console.log (elementsArray);
  for (let i = 0; i < elementsArray.length; i++) {
    if (clickedRadio === elementsArray[i].id) {
      newArray.push(elementsArray[i]);
      console.log(newArray);
    };
  };
  selectedDom(newArray);
};

const buttonEvent = () => {
  const checkButtons = document.getElementsByClassName('checkButton');
  for (let i = 0; i < checkButtons.length; i++) {
    checkButtons[i].addEventListener('click', selectedElement);
  };
};

module.exports = buttonEvent;
