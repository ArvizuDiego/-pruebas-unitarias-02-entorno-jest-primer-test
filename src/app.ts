const express = require('express');
const tareasRouter = require('./routes/Tareas.routes');

const app = express();

app.use(express.json());
app.use(tareasRouter);

module.exports = app;