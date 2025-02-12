const movies = require("../data/movies");

function getMovieById(id) {
  if (typeof id !== typeof 1) {
    return undefined
  }
  const result = movies.find((m) => {
    return id == m.id
  })
  return result
}

console.log(getMovieById(4))
module.exports = {
  getMovieById
}