const request = require('supertest');
const app = require('../app');

describe('POST /auth/cadastrar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/auth/cadastrar')
      .send({ "nome": "Gilberto Júnio",
            "email": "Gulbunio@hotmail.com",
            "senha": "123123123" })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});


describe('GET /auth/listar', function() {
    it('responds with json', async () => {
      request(app)
        .get('/auth/listar')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

//param:id ex:5f51778496c2084b6a8a9d35
describe('DELETE /auth/deletar/5f5177006950224a482b1bab', function() {
    it('responds with json', async () => {
      request(app)
        .get('/auth/deletar/5f5177006950224a482b1bab')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

//params: Post( id && data )
describe('POST /auth/editar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/auth/editar')
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