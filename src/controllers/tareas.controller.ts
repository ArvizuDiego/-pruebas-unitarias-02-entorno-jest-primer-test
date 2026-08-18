const tareasDB = [];

const crearTarea = (req, res) => {
  const { titulo } = req.body;

  // Validación: Caso de error
  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({
      error: 'El campo "titulo" es requerido y debe ser un texto válido.'
    });
  }

  // Creación: Caso feliz
  const nuevaTarea = {
    id: tareasDB.length + 1,
    titulo: titulo.trim(),
    completada: false
  };

  tareasDB.push(nuevaTarea);

  return res.status(201).json(nuevaTarea);
};

module.exports = {
  crearTarea,
  tareasDB
};