const fs       = require('fs')
const path     = require('path')
const express  = require('express')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//to tell app to find our static directory and how to serve those files 
app.use(express.static(path.join(__dirname, 'public')))

//we need to prepare a file index.ejs which will be rendered by index route, this will be created in views folder.
//which will be rendered here using app.get
//app.get uses two parameters , the url path and call back func
//it renders index view with a title: index key, value pair

app.get('/', (req, res) => res.render('index', {title: 'Index'}));

//to pull everything together, we re going to use app.listen to create an http server , listens on 3000 port

app.listen(3000, () => console.log('PROJECT RUNNING ON PORT 3000'))