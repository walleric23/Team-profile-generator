const Employee = require("../lib/employee");
// test to set name from constructor
test("Can set name from constructor", () => {
  const worker = new Employee("Eric");
  expect(worker.name).toBe("Eric");
});
// test to set email from constructor
test("Can set email from constructor", () => {
  const worker = new Employee("Eric", "walleric23@gmail.com");
  expect(worker.email).toBe("walleric23@gmail.com");
});
// test to set ID from constructor. Null bypasses 2nd value (email)
test("Can set id from constructor", () => {
  const worker = new Employee("Eric", null, 12);
  expect(worker.id).toBe(12);
});
