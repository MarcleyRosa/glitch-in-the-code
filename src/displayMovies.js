const { movies } = require("../data/list1");

const displayMovies = (movies) => {
  if (movies.length == 1) {
    return movies.map((m) => { return `Título ${m.titulo} - Diretor: ${m.diretor}` })
  } 
  movies.forEach((m) => {
    console.log(`Título: ${m.titulo} - Diretor: ${m.diretor}`);
  });
}

module.exports = {
  displayMovies
}