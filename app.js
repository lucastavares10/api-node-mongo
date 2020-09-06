
const port = process.env.PORT || 8412;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./controllers/usuarioController')(app);
require('./controllers/perfilController')(app);

app.get('/', (req, res) => {
    html = '<html><style> div{ display: inline-block;  padding: 20px; }</style>'
    html += '<body style= "text-align: center; margin-top:100px">';
    html += '<h1>API ROUTES</h1>';
    html += '<div> <h4>/usuario/cadastrar (nome, email, senha,<br> tipo(ex: "Administrador"))</h4>';
    html += '<h4>/usuario/listar</h4>';
    html += '<h4>/usuario/deletar/:id</h4>';
    html += '<h4>/usuario/editar/</h4> </div>';
    html += '<div> <h4>/perfil/cadastrar (tipo ex:"Administrador" ou "Usuario")</h4>';
    html += '<h4>/perfil/listar</h4>';
    html += '<h4>/perfil/deletar/:id</h4></div>';
    html += '</body></html>';

    res.send(html);
});

module.exports = app.listen(port, () => console.log(`Rodando na PORTA: ${port}`));
