const loadCategories = require('./category');
const loadMovieElements = require ('./movieElements');
const data = require('./data');
const printToDom = require('./dom');
const events = require('./events');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  console.log(categoriesData);
  data.setCategories(categoriesData);
  // loadMovieElements(loadCategories);
  loadMovieElements(whenMovieElementsLoad, errorFunction);
  // printToDom(categoriesData);
};

const whenMovieElementsLoad = function () {
  const movieElementsData = JSON.parse(this.responseText).movies;
  console.log(movieElementsData);
  data.setMoviesElements(movieElementsData);
  const getCategories = data.getCategories();
  const getMovieElements = data.getMovieElements();
  printToDom(getCategories, getMovieElements);
  // loadFile(loadCategoriesJson, movieElementsJson);
  events();
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
