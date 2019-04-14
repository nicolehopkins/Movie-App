const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {movieRouter} = require('./routes/movies');
const {genreRouter} = require('./routes/genres')

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


// ROUTERS
app.use('/movies', movieRouter);
app.use('/genres', genreRouter)



const port = 3005;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})