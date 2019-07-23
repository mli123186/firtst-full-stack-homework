const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app     = express();

require('./db/db');

const populationsController = require('./controllers/populations');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/populations', populationsController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000, () => {
  console.log('listening..... on port 3000');
});