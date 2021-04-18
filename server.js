const express = require('express');
const path = require('path');
const session = require('express-session');

const routes = require('./routes');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});