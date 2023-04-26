const { loadTitle } = require("./Utill");

test("shoulc print an uppercase text", () => {
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});
