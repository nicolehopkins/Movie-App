const express = require('express');
const genreRouter = express.Router();
const genreService = require('../services/genres');


// CREATE
genreRouter.post('/', (req, res, next) => {
  const {genre} = req.body;

  genreService.create(genre)
  .then(data => res.json({data}))
  .catch(err => console.log(err))
})


// READ
genreRouter.get('/', (req, res, next) => {
  genreService.readAll()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

genreRouter.get('/:id', (req, res, next) => {
  const {id} = req.params;

  genreService.read(id)
  .then(data => res.json(data))
  .catch(err => console.log(err))
})


// UPDATE
genreRouter.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {genre} = req.body;

  genreService.update(id, genre)  
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


//DELETE
genreRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  genreService.delete(id)
    .then(data => res.json(data)) 
    .catch(err => console.log(err))
})


module.exports = {genreRouter};