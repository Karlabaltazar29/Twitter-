const { TestWatcher } = require("jest");
const User = require("./../../app/models/User");

describe("Unit Test  for User class", () => {
  test("Create an User object", () => {
    //se invoca el  codigo que se va a usar en la app
    const user = new User(1, "KarlaB", "Karla", "Bio");

    //aqui se validan los resultados de ese codigo
    // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("KarlaB");
    expect(user.name).toBe("Karla");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
});
