import { dynamodb } from "../../inquiroDB.js"

const TABLE_RESPUESTAS = process.env.DYNAMODB_TABLE_RESPUESTAS;

const crearRespuestaRepository = async (respuestaData) => {
  const params = {
        TableName: TABLE_RESPUESTAS,
        Item: respuestaData,  
  };

  try {
    await dynamodb.put(params).promise();
    return respuestaData; 
  } catch (error) {
    console.error("Error al crear encuesta:", error);
    throw new Error("Error al crear encuesta");
  }
}

const obtenerRespuestasPorEncuestasPKRepository = async (id) => {
    const params = {
        TableName: TABLE_RESPUESTAS,
        KeyConditionExpression: 'respuestasInquiroPK = :id', 
        ExpressionAttributeValues: {
        ':id': id, 
    },
    ProjectionExpression: 'respuestas,fechaRespuesta', 
  };

  try {
    const result = await dynamodb.query(params).promise();
    return result.Items; 
  } catch (error) {
    console.log("No se pudo obtener respuestas por PK: " + error.message)
    throw new Error(`Error al obtener las encuestas: ${error.message}`);
  }
};

export {crearRespuestaRepository, obtenerRespuestasPorEncuestasPKRepository};




