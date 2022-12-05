class Manager extends employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
