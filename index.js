const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern  = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')
const runQuery = require('./src/getUserInput')


const data = {
  manager: null,
  team: []
}

const runQueryForTeam = async (data) => {
  let isRunning = true
  while(isRunning) {
    const menu = await runQuery('menu')
    if(menu.option === 'done') {
      isRunning = false
    }
    if (menu.option.toLowerCase() === 'engineer') {
      const employee = await runQuery('engineer')
      const engineer = new Engineer(
        employee.id, 
        employee.name, 
        employee.email, 
        employee.github
      )
      const newTeam = data.team
      newTeam.push(engineer)
      data.team = newTeam
    }
    if (menu.option.toLowerCase() === 'intern') {
      const employee = await runQuery('intern')
      const intern = new Intern(
        employee.id, 
        employee.name, 
        employee.email, 
        employee.school
      )
      const newTeam = data.team
      newTeam.push(intern)
      data.team = newTeam
    }
  }
}

runQuery('manager')
.then((manager) => {
  const manag = new Manager(
    manager.id, 
    manager.name, 
    manager.email, 
    manager.officeNumber
  )
  data.manager = manag
})
.then(async () => {
  await runQueryForTeam(data)
  generateHTML(data)
})




