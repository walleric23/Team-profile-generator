const Employee = require("./employee");
class Intern extends Employee {
  // pulls from employee parent class and adds school for intern
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // returns intern's school
  getTrait() {
    return this.school;
  }
  // intern overrides employee role
  getRole() {
    return "Intern";
  }
}
// node exports
module.exports = Intern;
