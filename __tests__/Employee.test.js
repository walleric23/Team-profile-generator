const Employee = require("../lib/employee");
test("Can set name from constructor", () => {
  const worker = new Employee("Eric");
  expect(worker.name).toBe("Eric");
});

test("Can set id from constructor", () => {
  const worker = new Employee("Eric", "walleric23@gmail.com");
  expect(worker.email).toBe("walleric23@gmail.com");
});
test("Can set id from constructor", () => {
  const worker = new Employee("Eric", null, 12);
  expect(worker.id).toBe(12);
});
