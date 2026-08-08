import request from 'supertest';
import app from '../src/app';

describe('GET /tareas', () => {
  it('Debe responder con un arreglo de tareas', async () => {
    const response = await request(app).get('/tareas');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    expect(response.body[0]).toHaveProperty('titulo');
    expect(response.body[0]).toHaveProperty('completada');

    // 6. La primera tarea debe tener una propiedad 'descripcion'
    // Esta propiedad no existe, y por lo tanto la prueba fallará
    expect(response.body[0]).toHaveProperty('descripcion');
  });
});