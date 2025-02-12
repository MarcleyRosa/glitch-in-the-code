const movies = require("../data/movies");

const nolanMoviesByRating = (movies) => {
  if (movies.length == 0) {
    return []
  }

  const result = movies.filter((m) => m.diretor == 'Christopher Nolan')

  return result
}

module.exports = {
  nolanMoviesByRating
}