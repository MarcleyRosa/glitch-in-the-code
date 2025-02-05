const movies = require("../data/movies");

const getAllTitles = (movie) => {
   const arrayTitulos = []
  for (let i = 0; i < movie.length; i++) {
    
    arrayTitulos.push(movie[i].titulo)
        
  }
  
  return arrayTitulos
}

getAllTitles(movies)
module.exports = {
  getAllTitles
}