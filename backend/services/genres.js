const {db} = require('./dbConnect');
const genreService = {};


genreService.create = (genre) => {
  const sql = `
  INSERT INTO genres(genre)
  VALUES ($[genre])
  RETURNING id`;
  return db.none(sql, {genre})
}

genreService.read = (id) => {
  const sql = `
  SELECT *
  FROM genres
  WHERE id=$[id]`
  return db.one(sql, {id})
}

genreService.readAll = (id) => {
  const sql = `
  SELECT *
  FROM genres`
  return db.any(sql, {id})
}

genreService.update = (id, title, genre_id, img_url) => {
  const sql = `
  UPDATE genres
  SET 
  id=$[id],
  title=$[title],
  genre_id=$[genre_id],
  img_url=$[img_url]
  WHERE id =$[id]`
  return db.none(sql, {title, genre_id, img_url})
}

genreService.delete = (id) => {
  const sql = `
  DELETE genres
  WHERE id=$[id]`
  return db.none(sql, {id})
}


module.exports = genreService;