const Manager = require("../lib/Manager");
test("Can set school from constructor", () => {
  const worker = new Manager(null, null, null, "12");
  expect(worker.officeNumber).toBe("12");
});
