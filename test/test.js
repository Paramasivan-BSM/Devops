const req = require('supertest');
const app = require('../index.js');

describe('GET /hello', () => {
  test('should return a greeting message', async () => {
    const response = await req(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, world!' });
  });

  test('should return user data for valid ID', async () => {
    const response = await req(app).get('/user/42');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: 42, name: 'John' });
  });
});
