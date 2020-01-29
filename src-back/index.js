require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const port = process.env.PORT || 8000;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use('/', indexRouter);

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`API listening on ${port}`);
  }
});
