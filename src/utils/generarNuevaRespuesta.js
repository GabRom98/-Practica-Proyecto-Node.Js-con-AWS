const generarNuevaRespuesta = (respuestasInquiroPK,respuestasInquiroSK, respuestas) => {
    return {
        respuestasInquiroPK,
        respuestasInquiroSK,
        respuestas,
        fechaRespuesta : new Date().toISOString()
    }
}

export default generarNuevaRespuesta;