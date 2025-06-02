import { crearEncuestaRepository, obtenerEncuestasPorPkRepository, obtenerEncuestaPorSkRepository, actualizarEncuestaRepository } from '../repository/encuestasRepository.js';

const crearEncuestaService = async (encuestaData) => {
  try {
    const nuevaEncuesta = await crearEncuestaRepository(encuestaData);
    return nuevaEncuesta;
  } catch (error) {
    throw new Error("No se pudo crear la encuesta.");
  }
};

const obtenerEncuestasPorPkService = async (encuestaData) => {
  try {
    const encuestas = await obtenerEncuestasPorPkRepository(encuestaData);
    return encuestas;
  } catch (error) {
    console.log(error.message)
    throw new Error("No se pudo obtener las encuestas");
  }
};

const obtenerEncuestaPorSkService = async (email,sk) => {
  try {
    const encuesta = await obtenerEncuestaPorSkRepository(email, sk);

    return encuesta;
  } catch (error) {
    throw new Error(error.message);
  }
};

const actualizarEncuestaService = async (InquiroPK, InquieroSK, titulo, preguntas) => {
  try {
    const encuesta = await actualizarEncuestaRepository(InquiroPK, InquieroSK, titulo, preguntas);

    return encuesta;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { crearEncuestaService, obtenerEncuestasPorPkService, obtenerEncuestaPorSkService, actualizarEncuestaService };