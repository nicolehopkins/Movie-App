const express = require('express');
const movieRouter = express.Router();
const movieService = require('../services/movies');


// CREATE
movieRouter.post('/', (req, res, next) => {
  const {title, genre_id, img_url} = req.body;

  movieService.create(title, genre_id, img_url)
  .then(data => {
    res.json({success: `created movie with id: ${id}`})
  })
  .catch(err => console.log(err))
})


// READ
movieRouter.get('/', (req, res, next) => {
  movieService.readAll()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})


// UPDATE



//DELETE


module.exports = {movieRouter};