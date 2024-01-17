var combustivel = require("./combustivel")

try {
    const distanciaPercorrida = 5000; // em metros
    const tipoDeCombustivel = 'gasolina';
    const litrosNecessarios = gastoCombustivel(distanciaPercorrida, tipoDeCombustivel);
  
    console.log(`Para percorrer ${distanciaPercorrida} metros com ${tipoDeCombustivel}, serão necessários ${litrosNecessarios} litros.`);
  } catch (error) {
    console.error(error.message);
  }