import { crearEncuestaService, obtenerEncuestasPorPkService, obtenerEncuestaPorSkService, actualizarEncuestaService } from '../service/encuestasService.js';
import generarNuevaEncuesta from "../utils/generarNuevaEncuesta.js"
import { v4 as uuidv4 } from "uuid"

//Hoy en dia las validaciones no tienen porque ser tan fuertes. Ya que lo manejaremos nosotros a la app.

const crearEncuestaController = async (req, res) => {
 const { email, titulo, preguntas } = req.body;
 const idEncuesta = uuidv4();

  if ( !email || !titulo || !Array.isArray(preguntas) || preguntas.length === 0) {
    return res.status(400).json({ message: 'Datos invalidos' });
  }

  const nuevaEncuesta = generarNuevaEncuesta(email, titulo, preguntas,idEncuesta);

  try {
    const encuestaCreada = await crearEncuestaService(nuevaEncuesta);
    res.status(201).json(encuestaCreada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const obtenerEncuestasPorPkController = async (req, res) => {
 const { email } = req.params;

  if ( !email ) {
    return res.status(400).json({ message: 'No se ingreso un email valido' });
  }

  try {
    const encuestas = await obtenerEncuestasPorPkService(email);
    if (encuestas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron encuestas para este usuario.' });
    }
    res.status(200).json({ encuestas });  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const obtenerEncuestaPorSkController = async (req, res) => {
 const { email, sk } = req.params;

  if ( !email || !sk ) {
    return res.status(400).json({ message: 'No se ingreso un id valido' });
  }

  try {
    const encuesta = await obtenerEncuestaPorSkService(email,sk);

    res.status(200).json({ encuesta });  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const actualizarEncuestaController = async (req, res) => {
 const { InquiroPK, InquieroSK, titulo, preguntas } = req.body;

  if ( !InquiroPK || !InquieroSK || !titulo || !Array.isArray(preguntas) || preguntas.length === 0 ) {
    return res.status(400).json({ message: 'Datos incompletos para la actualizacion.' });
  }

  try {
    const encuestaNueva = await actualizarEncuestaService(InquiroPK, InquieroSK, titulo, preguntas);

    res.status(200).json({ encuestaNueva });  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { crearEncuestaController, obtenerEncuestasPorPkController, obtenerEncuestaPorSkController, actualizarEncuestaController };