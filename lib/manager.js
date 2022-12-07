const Employee = require("./employee");
class Manager extends Employee {
  // pulls employee parents class and adds office number for manager
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // returns office number
  getTrait() {
    return this.officeNumber;
  }
  // manager overrides employee
  getRole() {
    return "Manager";
  }
}
// node exports
module.exports = Manager;
