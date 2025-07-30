const request = require('supertest');
const app = require('../index');

describe('Order Service API', () => {
  it('GET /orders - should return all orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
  });

  it('POST /orders - should create a new order', async () => {
    const res = await request(app)
      .post('/orders')
      .send({ id: 5, userId: 1, item: 'Sample Item' });
    expect(res.statusCode).toBe(201);
    expect(res.body.order.item).toBe('Sample Item');
  });
});
