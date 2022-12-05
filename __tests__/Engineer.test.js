const Engineer = require("../lib/Engineer");
test("Can set github from constructor", () => {
  const worker = new Engineer(null, null, null, "walleric23");
  expect(worker.github).toBe("walleric23");
});
