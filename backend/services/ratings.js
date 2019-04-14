const {db} = require('./dbConnect');
const ratingService = {};


ratingService.create = (stars, movie_id) => {
  const sql = `
  INSERT INTO ratings(stars)
  VALUES ($[stars], $[movie_id])
  RETURNING id`;
  return db.one(sql, {stars, movie_id})
}

ratingService.read = (id) => {
  const sql = `
  SELECT *
  FROM ratings
  WHERE id=$[id]`
  return db.one(sql, {id})
}

ratingService.readAll = () => {
  const sql = `
  SELECT *
  FROM ratings`
  return db.any(sql)
}

ratingService.readEverything = (id) => {
  const sql = `
  SELECT ratings.*
  FROM ratings
  WHERE ratings.id=$[id]`
  return db.any(sql, {id})
}

ratingService.update = (stars, movie_id) => {
  const sql = `
  UPDATE ratings
  SET 
  stars=$[stars],
  movie_id=$[movie_id]
  WHERE id =$[id]`
  return db.none(sql, {stars, movie_id})
}

ratingService.delete = (id) => {
  const sql = `
  DELETE *
  FROM ratings
  WHERE ratings.id=$[id]`
  return db.none(sql, {id})
}


module.exports = ratingService;