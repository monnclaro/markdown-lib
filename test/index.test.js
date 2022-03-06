const pegaArquivo = require('../index');
const jones = require('../index');

test('Deve ser uma função.', () => {
  expect(typeof jones).toBe('function');
});