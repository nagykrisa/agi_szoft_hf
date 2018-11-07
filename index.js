const { port, env } = require('./config/vars');
const mongoose = require('./config/mongoose');
const app = require('./config/express');

mongoose.connect();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, () => console.log(`App running on: localhost:${port} env: ${env}`));
