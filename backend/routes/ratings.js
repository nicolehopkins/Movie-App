const express = require('express');
const ratingRouter = express.Router();
const ratingService = require('../services/ratings');


// CREATE
ratingRouter.post('/', (req, res, next) => {
  const {stars, movie_id} = req.body;

  ratingService.create(stars, movie_id)
  .then(data => res.json({data}))
  .catch(err => console.log(err))
})


// READ
ratingRouter.get('/', (req, res, next) => {
  ratingService.readAll()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

ratingRouter.get('/:id', (req, res, next) => {
  const {id} = req.params;

  ratingService.read(id)
  .then(data => res.json(data))
  .catch(err => console.log(err))
})


// UPDATE
ratingRouter.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {stars, movie_id} = req.body;

  ratingService.update(id, stars, movie_id)  
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


//DELETE
ratingRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  ratingService.delete(id)
    .then(data => res.json(data)) 
    .catch(err => console.log(err))
})


module.exports = {ratingRouter};