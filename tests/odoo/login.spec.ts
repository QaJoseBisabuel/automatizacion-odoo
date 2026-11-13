import { test } from '../../fixtures/pages.fixture';

// Estos tests parten SIN sesión iniciada
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login', () => {
  test('rechaza credenciales incorrectas @smoke', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('usuario_inexistente', 'clave_incorrecta');
    await loginPage.expectLoginError();
  });
});
