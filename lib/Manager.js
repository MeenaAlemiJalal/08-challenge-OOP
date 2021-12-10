import Employee from './Employee.js'


class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email)
    this.officeNumber = officeNumber
    this.role = 'Manager'
  }
  get getRole(){
    return this.role
  }
  get getOfficeNumber(){
    return this.officeNumber
  }
}

export default Manager