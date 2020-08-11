const shortSentence = require('./shortSentence');

test('trunca una oracion', () => {
  // intenta cambiar el valor de la propuesta
  // para ver como el test falla
  const esperado = 'de seguro ...';
  const resultado = shortSentence('de seguro tiene más de 10 caracteres', 10);
  expect(resultado).toEqual(esperado);
});

/**
 * Escribe un test el cual verifique que
 * la frase no seria truncada, es decir
 * que su longitud sera menor que la especificada
 */
