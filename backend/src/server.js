const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@oministack-dwiob.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// GET, POST, PUT, DELETE

// rec.query = Acessar query params (para filtros) 
// rec.params = acessar route params (para edicao e delete)
// rec.body = acessar corpo da requisicao (criacao, edicao)

app.use(express.json());
app.use(routes);
 
app.listen(3333);