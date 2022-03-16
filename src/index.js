const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.port || 3000);
app.set('json spaces', 2);


//Middleares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/movies' ,require('./routes/movies'));

//Starting the server
app.listen(app.get('port'), () => {
  console.log('Servidor encendido')
})