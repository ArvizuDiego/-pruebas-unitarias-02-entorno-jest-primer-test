import { Request, Response } from 'express';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  descripcion: string;
}

export const tareas: Tarea[] = [
  { id: 1, titulo: "Estudiar pruebas", completada: false, descripcion: "Estudiar pruebas unitarias usando Jest" },
  { id: 2, titulo: "Hacer ejercicio", completada: true, descripcion: "Correr 30 minutos a 10km/h" },
];

export const obtenerTareas = (req: Request, res: Response) => {
  res.status(200).json(tareas);
};