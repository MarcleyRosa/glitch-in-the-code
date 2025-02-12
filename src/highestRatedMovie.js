const movies = require("../data/movies");

const highestRatedMovie = (movies) => {
  if (movies.length == 0) {
    return undefined
  }

  const result = movies.reduce((acumulador, element) => {
    if (element.avaliacao >= acumulador.avaliacao) {
      return element
    } else {
      return acumulador
    }
    
  } )
  return result 
}

highestRatedMovie(movies)
module.exports = {
  highestRatedMovie
}