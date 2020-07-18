const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear el sevidor 
const app = express();

// habilitar cors 
app.use(cors());

// conectar mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// habiitar routing 
app.use('/', routes());


// puerto y arrancar el servidor 
app.listen(4000, ()=>{
    console.log('el serviddor esta funcionando');
})

