const express = require("express");
const cors = require('cors');
const morgan = require("morgan");

const app = express();
const port = 8333;

const index = require('./routes/index');
const hello = require('./routes/hello');

app.use('/', index);
app.use('/hello', hello);
