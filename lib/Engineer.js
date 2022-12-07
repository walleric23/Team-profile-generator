const Employee = require("./employee");
class Engineer extends Employee {
  // pulls in traits from employee class and then adds github for enginner
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // returns engineers github
  getGithub() {
    return this.github;
  }
  // Engineer role overrides employee
  getRole() {
    return "Engineer";
  }
}
// node exports
module.exports = Engineer;
