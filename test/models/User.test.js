const { TestWatcher } = require("jest");
const User = require("./../../app/models/User");

describe("Unit Test  for User class", () => {
  test("Create an User object", () => {
    //se invoca el  codigo que se va a usar en la app
    const user = new User(1, "karlaB", "karla", "Bio", "dateCreated", "lastUpdated");

    //aqui se validan los resultados de ese codigo
    // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
});
