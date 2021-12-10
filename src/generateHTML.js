import fs from 'fs'
import chalk from 'chalk'


const createEmployeeCard = (employee) => {
  const employeeRole = employee.getRole
  let icon = '&#128083'
  let lastDetail
  let lastDetailLabel
  switch (employeeRole) {
    case 'Manager':
      lastDetail = employee.getOfficeNumber
      lastDetailLabel = 'Office number'
      icon = '&#9749'
      break;
    case 'Engineer':
      lastDetail = employee.getGithub
      lastDetailLabel = 'Github'
      break
    default:
      lastDetail = employee.getSchool
      lastDetailLabel = 'School'
      icon = '&#127891'
  }

  let lastDetailHtml = `<div class="employee-detail">${lastDetailLabel}: ${lastDetail}</div>`
  if(employeeRole === 'Engineer'){
    lastDetailHtml = `<div class="employee-detail">${lastDetailLabel}:<a href='${lastDetail}'>${lastDetail}</a></div>`
  }
  return `
    <div class="employee-container">
        <div class="employee-header">
            <div class="employee-name">${employee.getName}</div>
            <div class="employee-role">${icon} ${employeeRole}</div>
        </div>
        <div class="employee-details">
            <div class="employee-detail">ID: ${employee.getId}</div>
            <div class="employee-detail">Email: <a href='mailto:${employee.email}'>${employee.getEmail}</a></div>
            ${lastDetailHtml}
        </div>
    </div>
`
}

const htmls = {
  engineer: createEmployeeCard,
  intern: createEmployeeCard,
  manager: createEmployeeCard,
}

const generateHTML = (data) => {
  const manager = data.manager
  const team = data.team
  const managerCard = htmls[manager.getRole.toLowerCase()](manager)
  const teamCards = team.map((employee)=>{
    return htmls[employee.getRole.toLowerCase()](employee)
  })

  const htmlPage = `
    <html>
      <head>
        <title>Node.js-OOP</title>
        <link href='./styles.css' rel='stylesheet' />
      </head>
      <body>
        <div class='container'>
          <div class='container-header'>
            <h1>My Team</h1>
          </div>
          <div class='container-body'>
          ${managerCard}
          ${teamCards}
          </div>
        </div>
      </body>
    </html>
  `

  fs.writeFile('./dist/index.html', htmlPage, (err) => {
    if(err) {
      console.log(chalk.red('Error generating html'), err)
    } else {
      console.log(chalk.green('SUCCESS:'), `"index.html" generated inside /dist folder`)
    }
  })
}

export default generateHTML