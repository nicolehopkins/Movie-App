const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {movieRouter} = require('./routes/movies')

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


// ROUTERS
app.use('/movies', movieRouter);



const port = 3005;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})