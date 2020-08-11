const camelCase = require('./camelCase');

test('Convierte a camelCase', () => {
  const esperado = 'holaMiNombreEsRogger';
  const resultado = camelCase('hola mi nombre es rogger');
  expect(resultado).toEqual(esperado);
});
