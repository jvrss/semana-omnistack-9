const express = require('express');

const app = express();


// GET, POST, PUT, DELETE
// rec.query = Acessar query params (para filtros) 
// rec.params = acessar route params (para edicao e delete)
// rec.body = acessar corpo da requisicao (criacao, edicao)

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json(req.body);
})

app.listen(3333);