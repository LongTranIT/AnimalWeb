const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routers');
const mongoose = require('mongoose');

const path = require('path');
const handlebars = require('express-handlebars');
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  helpers: require('./helpers/handlebars')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware

//Connect to database
const db = require('./app/config/db');
db.connect();

route(app);

app.listen(port, () => {
  console.log(`render Animal Web`);
})