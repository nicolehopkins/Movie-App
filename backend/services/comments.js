const {db} = require('./dbConnect');
const commentService = {};


commentService.create = (text, movie_id) => {
  const sql = `
  INSERT INTO comments(text, movie_id)
  VALUES ($[text], $[movie_id])
  RETURNING id`;
  return db.one(sql, {text, movie_id})
}

commentService.read = (id) => {
  const sql = `
  SELECT *
  FROM comments
  WHERE id=$[id]`
  return db.one(sql, {id})
}

commentService.readAll = () => {
  const sql = `
  SELECT *
  FROM comments`
  return db.any(sql)
}

commentService.readEverything = (id) => {
  const sql = `
  SELECT comments.*
  FROM comments
  WHERE comments.id=$[id]`
  return db.any(sql, {id})
}

commentService.update = (id, text, movie_id) => {
  const sql = `
  UPDATE comments
  SET 
  text=$[text],
  movie_id=$[movie_id]
  WHERE id =$[id]`
  return db.none(sql, {id, text, movie_id})
}

commentService.delete = (id) => {
  const sql = `
  DELETE *
  FROM comments
  WHERE comments.id=$[id]`
  return db.none(sql, {id})
}


module.exports = commentService;