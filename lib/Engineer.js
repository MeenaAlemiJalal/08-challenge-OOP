import Employee from './Employee.js'


class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email)
    this.github = github
    this.role = 'Engineer'
  }

  get getGithub(){
      return this.github
  }
  get getRole(){
    return this.role
  }
}

export default Engineer