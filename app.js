const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');


app.use(express.static('/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use(express.static('/node_modules/jquery/dist')); // redirect JS jQuery
app.use(express.static('./node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(express.static('./node_modules/@fortawesome/fontawesome-free/css'));
app.use(express.static('./node_modules/@fortawesome/fontawesome-free/js'));
app.use(express.static('./node_modules/popper.js/dist'));
app.use(express.static('./views'));
app.use(express.static('./styles'));
app.use(express.static('./scripts'));

//Body Parser
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


app.use('/', require('./routes/form'));



const port = process.env.PORT || 5000;

app.listen(port, console.log(`server started on port http://localhost:${port}`));
