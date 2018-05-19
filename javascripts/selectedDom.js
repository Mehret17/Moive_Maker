const rightOutputDiv = document.getElementById('right-container');

const  domString = (elementsArray) => {
  let selectionString = '';
  elementsArray.forEach((elements) => {
    // domString += `<div class="col-xs-8 col-xs-offset-2">`;
    selectionString += `<h4>${elements.name}: $${elements.cost}</h4>`;
  });
  return selectionString;
};
const dom = (elementsArray) => {
  rightOutputDiv.innerHTML += domString(elementsArray);
};
module.exports = dom;
