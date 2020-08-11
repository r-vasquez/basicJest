const capitalize = require('./capitalize');

test('Primera mayuscula', () => {
  const esperado = 'Hola mi nombre es rogger';
  const resultado = capitalize('hola mi nombre es rogger');
  expect(resultado).toEqual(esperado);
});
