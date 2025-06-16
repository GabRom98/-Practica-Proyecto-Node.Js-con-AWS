//Este archivo manejará las rutas para almacenar las respuestas de los usuarios y obtenerlas.
import { Router } from "express";
import { crearRespuestaController, obtenerRespuestasController } from "../controllers/respuestasController.js"

const respuestasRouter = Router();

respuestasRouter.get('/:id', obtenerRespuestasController);
respuestasRouter.post('/', crearRespuestaController);

export default respuestasRouter;