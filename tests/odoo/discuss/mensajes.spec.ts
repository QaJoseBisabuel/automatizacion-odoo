import { test } from "../../../fixtures/pages.fixture";

test("enviar mensaje al canal general @integration", async ({
  discussPage,
}) => {
  const texto = `Mensaje de prueba ${Date.now()}`;

  await discussPage.open();
  await discussPage.openChannel("general");
  await discussPage.sendMessage(texto);
  await discussPage.expectMessage(texto);
});
