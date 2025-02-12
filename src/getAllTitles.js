const movies = require("../data/movies");

const getAllTitles = (movie) => movie.map(m => m.titulo);


module.exports = {
  getAllTitles
}