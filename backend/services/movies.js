const {db} = require('./dbConnect');
const movieService = {};


movieService.create = (title, genre_id, img_url) => {
  const sql = `
  INSERT INTO movies(title, genre_id, img_url)
  VALUES ($[title], $[genre_id], $[img_url])
  RETURNING id`;
  return db.one(sql, {title, genre_id, img_url})
}

movieService.read = (id) => {
  const sql = `
  SELECT *
  FROM movies
  WHERE id=$[id]`
  return db.one(sql, {id})
}

movieService.readAll = () => {
  const sql = `
  SELECT *
  FROM movies`
  return db.any(sql)
}

movieService.readEverything = (id) => {
  const sql = `
  SELECT movies.*
  FROM movies
  WHERE movies.id=$[id]`
}

movieService.update = (id, title, genre_id, img_url) => {
  const sql = `
  UPDATE movies
  SET 
  title=$[title],
  genre_id=$[genre_id],
  img_url=$[img_url]
  WHERE id =$[id]`
  return db.none(sql, {id, title, genre_id, img_url})
}

movieService.delete = (id) => {
  const sql = `
  DELETE *
  FROM movies
  WHERE movies.id=$[id]`
  return db.none(sql, {id})
}


module.exports = movieService;