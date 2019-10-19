// CLI inputs for logic and search term
const userInput = process.argv[2];
const userQuery = process.argv.slice(3).join(' ');
const inquirer = require('inquirer');


/**
 * Get the user input using Inquirer lib
 * @return {Promise} an Inquirer promise that resolves with
 * an answers object
 */
function getUserInputAsync() {
  return inquirer.prompt([
    {
      name: 'type',
      message: 'Would you like to Bid or Sell?',
      type: 'list',
      choices: ['Bid', 'Sell'],
      default: 'Bid',
    },
  ]).then(userCommand);
}
// Logic for the correct API based on CLI
function userCommand() {
  switch (answers.type) {
    case 'Sell':
      postThis();
      break;

    case 'Bid':
      bidThis();
      break;
  }
};


getUserInputAsync();

function postThis() {
  console.log('post');
}



function bidThis() {
  console.log('bid');
}
