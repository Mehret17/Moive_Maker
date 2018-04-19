const loadCategories = require('./category');
const loadMovieElements = require ('./movieElements');
const data = require('./data');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText);
  console.log(categoriesData);
  data.setCategories(categoriesData);
  // loadMovieElements(loadCategories);
  loadMovieElements(whenMovieElementsLoad, errorFunction);
};

const whenMovieElementsLoad = function () {
  const movieElementsData = JSON.parse(this.responseText);
  console.log(movieElementsData);
  data.setMoviesElements(movieElementsData);
  // loadFile(loadCategoriesJson, movieElementsJson);
};

const errorFunction = function () {
  console.error('something is wrong');
};

const initializer = () => {
  // loadMovieElements(whenMovieElementsLoad, errorFunction);
  loadCategories(whenCategoriesLoad, errorFunction);
};

module.exports = {
  initializer,
};
