import { crearRespuestaService, obtenerRespuestasService } from "../service/respuestasService.js";
import generarNuevaRespuesta from "../utils/generarNuevaRespuesta.js";
import { v4 as uuidv4 } from "uuid"

const crearRespuestaController = async (req, res) => {
    const {respuestaInquiroPK,respuestas} = req.body;
    const idRespuesta = uuidv4();

    if(!respuestaInquiroPK || !Array.isArray(respuestas) || respuestas.length === 0){
        return res.status(400).json({ message: 'Datos Invalidos' });
    }

    const nuevaRespuesta = generarNuevaRespuesta(respuestaInquiroPK,idRespuesta,respuestas);

    try{
        const respuestaCreada = await crearRespuestaService(nuevaRespuesta);
        res.status(200).json( respuestaCreada );  
    } catch(error){
        res.status(500).json({ message: error.message });
    }
}

const obtenerRespuestasController = async (req, res) => {
    const { id } = req.params;

    if ( !id ) {
        return res.status(400).json({ message: 'No se ingreso un id valido' });
    }

    try{
        const respuestasObtenidas = await obtenerRespuestasService(id);
        res.status(200).json( respuestasObtenidas );  
    } catch(error){
        res.status(500).json({ message: error.message });
    }
}

export { crearRespuestaController, obtenerRespuestasController };