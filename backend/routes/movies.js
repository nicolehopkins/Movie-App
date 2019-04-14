const express = require('express');
const movieRouter = express.Router();
const movieService = require('../services/movies');


// CREATE
movieRouter.post('/', (req, res, next) => {
  const {title, genre_id, img_url} = req.body;

  movieService.create(title, genre_id, img_url)
  .then(data => res.json({data}))
  .catch(err => console.log(err))
})


// READ
movieRouter.get('/', (req, res, next) => {
  movieService.readAll()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

movieRouter.get('/:id', (req, res, next) => {
  const {id} = req.params;

  movieService.read(id)
  .then(data => res.json(data))
  .catch(err => console.log(err))
})


// UPDATE
movieRouter.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {title, genre_id, img_url} = req.body;

  movieService.update(id, title, genre_id, img_url)  
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


//DELETE
movieRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  movieService.delete(id)
    .then(data => res.json(data)) 
    .catch(err => console.log(err))
})


module.exports = {movieRouter};