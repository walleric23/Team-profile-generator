class Employee {
  // constructor for employee parent class w/ name email and ID
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  // returns name
  getName() {
    return this.name;
  }
  // returns id
  getID() {
    return this.id;
  }
  // returns email
  getEmail() {
    return this.email;
  }
  // returns role
  getRole() {
    return "Employee";
  }
}
// node exports
module.exports = Employee;
