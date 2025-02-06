const movies = require("../data/movies");

function getMoviesByActor(ator) {
 return movies.filter((movies) => movies.elenco.includes(ator))
}

module.exports = {
  getMoviesByActor
}