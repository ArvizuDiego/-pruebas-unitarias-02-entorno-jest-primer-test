const request = require('supertest');
const app = require('../src/App');
const { tareasDB } = require('../src/controllers/tareas.controller');

describe('POST /tareas', () => {
  beforeEach(() => {
    // Limpiamos el arreglo antes de cada prueba
    tareasDB.length = 0;
  });

  describe('Caso Feliz', () => {
    it('debe crear una nueva tarea exitosamente y retornar status 201', async () => {
      const nuevaTarea = { titulo: 'Aprender Jest y Supertest' };

      const response = await request(app)
        .post('/tareas')
        .send(nuevaTarea);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('titulo', 'Aprender Jest y Supertest');
      expect(response.body).toHaveProperty('completada', false);
    });
  });

  describe('Caso de Error', () => {
    it('debe retornar status 400 cuando no se proporciona el campo "titulo"', async () => {
      const tareaInvalida = {};

      const response = await request(app)
        .post('/tareas')
        .send(tareaInvalida);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });
});