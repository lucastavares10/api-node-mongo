const request = require('supertest');
const app = require('../app');

/* ----------------------- USUARIO ------------------------- */

describe('GET /usuario/listar', function() {
  it('Rota de listagem funcionando', async () => {
    request(app)
      .get('/usuario/listar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});

/**

//params: nome, email, senha
describe('POST /usuario/cadastrar', function() {
  it('Rota de cadastro funcionando', async () => {
    request(app)
      .post('/usuario/cadastrar')
      .send({ "nome": "Lucas Tavares Freire",
            "email": "lucas_tavares10@hotmail.com",
            "senha": "123123123",
            "perfil": "Administrador" 
          })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});

//param:email ex:lucas_tavares10@hotmail.com
describe('DELETE /usuario/deletar/lucas_tavares10@hotmail.com', function() {
    it('Rota de remoção funcionando', async () => {
      request(app)
        .get('/usuario/deletar/lucas_tavares10@hotmail.com')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

//params: id, nome, email, senha
describe('POST /usuario/editar', function() {
  it('Rota de edição funcionando', async () => {
    request(app)
      .post('/usuario/editar')
      .send({ 
            "id": "5f5171e46a4ec344815b1100",
            "nome": "Josefina da Silva",
            "email": "josefina@hotmail.com",
            "senha": "12311223123" })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});

*/


/* ----------------------- PERFIL ------------------------- */


describe('GET /perfil/listar', function() {
  it('Rota de listagem funcionando', async () => {
    request(app)
      .get('/perfil/listar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});


/*

//param:tipo --- ex:'Administrador'
describe('POST /perfil/cadastrar', function() {
  it('Rota de cadastro funcionando', async () => {
    request(app)
      .post('/perfil/cadastrar')
      .send({ "tipo": "Administrador"})
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});


//param:tipo --- ex:'Administrador'
describe('DELETE /perfil/deletar/Administrador', function() {
    it('Rota de remoção funcionando', async () => {
      request(app)
        .get('/perfil/deletar/Administrador')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

*/