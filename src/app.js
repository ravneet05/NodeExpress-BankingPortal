const fs       = require('fs')
const path     = require('path')
const express  = require('express')


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//to tell app to find our static directory and how to serve those files 
app.use(express.static(path.join(__dirname, 'public')))


//this is from next module- file handling and routing
//read the data from accounts.json file and store in a const called accountdata
//readfile sync accepts 2 args - absolute path and encoding

const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');

//to work with this data we need to convert it into a javascript object

const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');

const users = JSON.parse(userData);
//we need to prepare a file index.ejs which will be rendered by index route, this will be created in views folder.
//which will be rendered here using app.get
//app.get uses two parameters , the url path and call back func
//it renders index view with a title: index key, value pair

//app.get('/', (req, res) => res.render('index', {title: 'Index'}));
//display summary on home page about accounts





app.get('/', (req, res) => { res.render('index', {title: 'Accounts Summary', accounts});
});
// after this we need to adjust index.ejs to display the summary of all the 3 accounts on home page

//after creating links in index.ejs to summary , we need to create route to these transactions in app.js
app.get('/savings', (req, res) => {res.render('account', { account: accounts.savings });
});

app.get('/checking', (req,res) => {res.render('account', { account: accounts.checking });
});

app.get('/credit', (req, res) => {res.render('account', { account: accounts.credit });
});

app.get('/profile', (req, res) => {
    res.render('profile', {user: users[0]});
});
// we need to include transactions view in the account.ejs

//to pull everything together, we re going to use app.listen to create an http server , listens on 3000 port

app.listen(3000, () => console.log('PROJECT RUNNING ON PORT 3000'))