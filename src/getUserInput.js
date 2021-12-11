const inquirer = require('inquirer')
const Questions = require('./questions')

const questions = {
  manager: Questions.managerRelatedQuestions,
  engineer: Questions.engineerRelatedQuestions,
  intern: Questions.internRelatedQuestions,
  menu: Questions.menuRelatedOptions
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

module.exports = runQuery