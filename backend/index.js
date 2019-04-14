const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {movieRouter} = require('./routes/movies');
const {genreRouter} = require('./routes/genres')
const {ratingRouter} = require('./routes/ratings')
const {commentRouter} = require('./routes/comments')

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


// ROUTERS
app.use('/movies', movieRouter);
app.use('/genres', genreRouter);
app.use('/ratings', ratingRouter);
app.use('/comments', commentRouter);


const port = 3005;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})