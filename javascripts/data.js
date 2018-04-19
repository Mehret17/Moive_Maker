let categories = [];
let movieElements = [];

const getCategories = () => {
  return categories;
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getMovieElements = () => {
  return movieElements;
};

const setMoviesElements = (moviesArray) => {
  movieElements = moviesArray;
};

module.exports = {
  getCategories,
  setCategories,
  getMovieElements,
  setMoviesElements,
};
