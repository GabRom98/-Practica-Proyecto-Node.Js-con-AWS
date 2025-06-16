import {crearRespuestaRepository, obtenerRespuestasPorEncuestasPKRepository} from "../repository/respuestasRepository.js"

const crearRespuestaService = async (respuestaData) => {
  try {
    const nuevaRespuesta = await crearRespuestaRepository(respuestaData);
    return nuevaRespuesta;
  } catch (error) {
    throw new Error("No se pudo crear la respuesta.");
  }
}

const obtenerRespuestasService = async (id) => {
  try {
    const respuestas = await obtenerRespuestasPorEncuestasPKRepository(id);
    return respuestas;
  } catch (error) {
    console.log(error.message)
    throw new Error("No se pudo obtener las respuestas");
  }
};

export {crearRespuestaService, obtenerRespuestasService};