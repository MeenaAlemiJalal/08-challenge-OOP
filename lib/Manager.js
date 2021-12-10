const Employee = require('./Employee')


class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email)
    this.officeNumber = officeNumber
    this.role = 'Manager'
  }
  get getRole(){
    return this.role
  }
}

module.exports = Manager