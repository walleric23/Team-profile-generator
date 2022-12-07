// tests for office number bypass employee traits
const Manager = require("../lib/Manager");
test("Can set office number from constructor", () => {
  const worker = new Manager(null, null, null, "12");
  expect(worker.officeNumber).toBe("12");
});
