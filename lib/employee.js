class employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
