const movies = require("../data/movies");

const orderMoviesByYear = (movies) => {
  if (movies.length < 1) {
    return []
  }

  const result = [...movies].sort((a, b) => a.anoLancamento - b.anoLancamento);
  
  return result
}

module.exports = {
  orderMoviesByYear
}