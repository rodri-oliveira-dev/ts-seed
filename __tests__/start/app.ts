import request from 'supertest';

import app from '../../src/start/app';

describe('Route testing', () => {
  it('Should return an http 200 and a "message" property (route: GET /)', async () => {
    const res = await request(app).get('/');
    const httpOK = 200;
    expect(res.status).toEqual(httpOK);
    expect(res.body).toHaveProperty('message');
  });
  // A validação do retorno 404 irei deixar como desafio
});
