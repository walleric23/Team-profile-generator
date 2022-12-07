// test for intern's college, bypass employee traits
const Intern = require("../lib/Intern");
test("Can set school from constructor", () => {
  const worker = new Intern(null, null, null, "University Of Washington");
  expect(worker.school).toBe("University Of Washington");
});
