it("Devo conhecer as principais assertivas do Jest", () => {
  let number = null;

  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toBeLessThan(11);
});

it("Devo saber trabalhar com objetos", () => {
  const person = {
    name: "John",
    email: "john@dev.com",
  };

  expect(person).toHaveProperty("name");
  expect(person).toHaveProperty("name", "John");
  expect(person.name).toBe("John");

  const anotherPerson = {
    name: "John",
    email: "john@dev.com",
  };

  expect(person).toEqual(anotherPerson);
});
