//Este archivo manejará las rutas para almacenar las respuestas de los usuarios y obtenerlas.
import { Router } from "express";

const respuestasRouter = Router();

respuestasRouter.get('/', (req, res) => {
    res.send('RESPUESTAS');
});

export default respuestasRouter;