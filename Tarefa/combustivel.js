function gastoCombustivel(distanciaEmMetros, tipoCombustivel){
    
    // Verificação dos combustíveis 
    if (!Number.isInteger(distanciaEmMetros) || distanciaEmMetros < 0) {
        throw new Error('A distância deve ser um número inteiro não negativo.');
      }
    
      // Verificar se o tipo de combustível é válido
      if (tipoCombustivel !== 'gasolina' && tipoCombustivel !== 'etanol') {
        throw new Error('O tipo de combustível deve ser "gasolina" ou "etanol".');
      }
    
    // Definição da kilometragem de acordo com o tipo de combustivel  
    const gasolina = 16;
    const etanol = 11;

    // Conversão de metros em km
    const distanciaEmKm = distanciaEmMetros/1000;

    // Calculando a quantidade de litros necessários com base no tipo de combustível
    let litrosNecessarios;
    if (tipoCombustivel === 'gasolina') {
        litrosNecessarios = distanciaEmKm / taxaGasolina;
    } else {
    // Caso seja "etanol"
    litrosNecessarios = distanciaEmKm / taxaEtanol;
  }

  // Arredondando para o próximo número inteiro
  litrosNecessarios = Math.ceil(litrosNecessarios);

  return litrosNecessarios;
}

module.exports(gastoCombustivel);