//Este archivo manejará las rutas para obtención de preguntas y la creación de encuestas nuevas.
import { Router } from "express";
import { crearEncuestaController, obtenerEncuestasPorPkController, obtenerEncuestaPorSkController, actualizarEncuestaController } from "../controllers/encuestasController.js"

const encuestasRouter = Router();

encuestasRouter.get('/email/:email', obtenerEncuestasPorPkController)
encuestasRouter.get('/email/:email/id/:sk', obtenerEncuestaPorSkController)
encuestasRouter.post('/', crearEncuestaController);
encuestasRouter.put('/', actualizarEncuestaController)

export default encuestasRouter;