const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');






const port = 3005;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})