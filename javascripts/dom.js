const outPutDiv = document.getElementById('left-container');

const megaSmash = (categoriesArray, moviesArray) => {
  let domString = '';
  categoriesArray.forEach((categories) => {
    // domString += `<div class="col-xs-8 col-xs-offset-2">`;
    domString += `<h1>${categories.categoryName}</h1>`;
    // let domString = '<h3 class="text-center">Your Cart</h3>';
    // domString += `<div class="col-xs-8 col-xs-offset-2">`;
    // domString += `<table class="table table-striped">`;
    // domString +=   `<tr>`;
    // domString +=     `<th>Name</th>`;
    // // domString +=     `<th>Price</th>`;
    // // domString +=     `<th>Quantity</th>`;
    // domString +=     `<th></th>`;
    // domString +=   `</tr>`;
    moviesArray.forEach((movies) => {
      if (categories.id === movies.categoryId) {
        // domString += `<div class = "container">`;
        // domString += `<div class "col-sm-4 rightContainer">`;
        domString += `<div class="checkbox">`;
        domString += `<label>`;
        domString += `<input type="checkbox" class ="checkButton" id ="${movies.id}">${movies.name}`;
        domString += `</label>`;
        domString += `</div>`;
        // domString += `</div>`;
      };
    });
    // domString += `</div>`;
  });
  return domString;
};
const printToDom = (categories, movies) => {
  outPutDiv.innerHTML = megaSmash(categories, movies);
};
module.exports = printToDom;
