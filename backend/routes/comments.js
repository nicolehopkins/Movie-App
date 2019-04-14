const express = require('express');
const commentRouter = express.Router();
const commentService = require('../services/comments');


// CREATE
commentRouter.post('/', (req, res, next) => {
  const {text, movie_id} = req.body;

  commentService.create(text, movie_id)
  .then(data => res.json({data}))
  .catch(err => console.log(err))
})


// READ
commentRouter.get('/', (req, res, next) => {
  commentService.readAll()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

commentRouter.get('/:id', (req, res, next) => {
  const {id} = req.params;

  commentService.read(id)
  .then(data => res.json(data))
  .catch(err => console.log(err))
})


// UPDATE
commentRouter.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {text, movie_id} = req.body;

  commentService.update(id, text, movie_id)  
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


//DELETE
commentRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  commentService.delete(id)
    .then(data => res.json(data)) 
    .catch(err => console.log(err))
})


module.exports = {commentRouter};