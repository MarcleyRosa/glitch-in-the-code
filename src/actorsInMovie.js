const movies = require("../data/movies");

const actorsInMovie = (titulo) => {
  
  const result = movies.find((m) => m.titulo == titulo)
  if (!result) {
    console.log("Filme não encontrado")
    return "Filme não encontrado."
  } else {
    console.log([ result.elenco[0], result.elenco[1] ])
    return [result.elenco[0], result.elenco[1]]
  }
}

actorsInMovie("Homem de Ferro")
module.exports = {
  actorsInMovie
}