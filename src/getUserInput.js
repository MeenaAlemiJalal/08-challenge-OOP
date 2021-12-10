import inquirer from 'inquirer'
import chalk from 'chalk'
import {
  managerRelatedQuestions,
  engineerRelatedQuestions,
  internRelatedQuestions,
  menuRelatedOptions
} from './questions.js'

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
      console.log(chalk.red('Error:'), err)
    })
}

export default runQuery