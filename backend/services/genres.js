const {db} = require('./dbConnect');
const genreService = {};


genreService.create = (genre) => {
  const sql = `
  INSERT INTO genres(genre)
  VALUES ($[genre])
  RETURNING id`;
  return db.one(sql, {genre})
}

genreService.read = (id) => {
  const sql = `
  SELECT *
  FROM genres
  WHERE id=$[id]`
  return db.one(sql, {id})
}

genreService.readAll = () => {
  const sql = `
  SELECT *
  FROM genres`
  return db.any(sql)
}

genreService.readEverything = (id) => {
  const sql = `
  SELECT genres.*
  FROM genres
  WHERE genres.id=$[id]`
  return db.any(sql, {id})
}

genreService.update = (genre) => {
  const sql = `
  UPDATE genres
  SET 
  genre=$[genre]
  WHERE id =$[id]`
  return db.none(sql, {genre})
}

genreService.delete = (id) => {
  const sql = `
  DELETE *
  FROM genres
  WHERE genres.id=$[id]`
  return db.none(sql, {id})
}


module.exports = genreService;