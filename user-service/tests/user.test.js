const request = require('supertest');
const app = require('../index');

describe('User Service API', () => {
  it('GET /users - should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
  });

  it('POST /users - should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ id: 10, name: 'Test User', email: 'test@example.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.user.name).toBe('Test User');
  });
});
