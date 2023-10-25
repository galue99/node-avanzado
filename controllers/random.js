const axios = require('axios');

const randomUrl = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
const response = '116';

exports.randomNumber = async function(req, res) {

  try {
    const response1 = await axios.get(randomUrl);
    const number1 = response1.data; // Asumiendo que la API devuelve un número directamente.

    const response2 = await axios.get(randomUrl);
    const number2 = response2.data;

    // Sumar los dos números.
    const sum = number1 + number2;

    // Verificar si la suma es igual al valor de 'response'.
    const isEqual = sum === response;

    // Enviar el resultado como respuesta.
    res.json({"result": isEqual});

  } catch (error) {
    res.status(500).send("Error al obtener números aleatorios");
  }

};
