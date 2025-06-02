const generarNuevaEncuesta = (email,titulo,preguntas,idEncuesta) => {
    return {
    InquiroPK: email,
    InquieroSK: idEncuesta,
    titulo,
    preguntas,
    fechaCreacion: new Date().toISOString()
  };
}

export default generarNuevaEncuesta; 

