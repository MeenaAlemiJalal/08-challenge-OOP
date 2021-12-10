import inquirer from 'inquirer'
import chalk from 'chalk'


const managerRelatedQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the manager\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the manager\'s employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the manager\'s email?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the manager\'s officeNumber?',
  },
]

const engineerRelatedQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the engineer\'s employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer\'s email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the engineer\'s github?',
  },
]

const internRelatedQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern\'s employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern\'s email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the intern\'s school name?',
  },
]

const menuRelatedOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Choose the type of employee you for the team?, or select "done" to exit the program',
    choices: ['Engineer', 'Intern', 'done'],
    filter(val) {
      return val.toLowerCase();
    },
  },
]

const questions = {
  manager: managerRelatedQuestions,
  engineer: engineerRelatedQuestions,
  intern: internRelatedQuestions,
  menu: menuRelatedOptions
}

async function runQuery(type) {
  return inquirer.prompt(questions[type])
    .then(function (answers) {
      return answers
    })
    .catch(function (err) {
      console.log(chalk.red('Error:'),err)
    })
}

export default runQuery