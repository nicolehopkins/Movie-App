const {db} = require('./dbConnect');
const ratingService = {};


ratingService.create = (rating) => {
  const sql = `
  INSERT INTO ratings(rating)
  VALUES ($[rating])
  RETURNING id`;
  return db.one(sql, {rating})
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
}

ratingService.update = (id, title, rating_id, img_url) => {
  const sql = `
  UPDATE ratings
  SET 
  rating=$[rating]
  WHERE id =$[id]`
  return db.none(sql, {id, title, rating_id, img_url})
}

ratingService.delete = (id) => {
  const sql = `
  DELETE *
  FROM ratings
  WHERE ratings.id=$[id]`
  return db.none(sql, {id})
}


module.exports = ratingService;