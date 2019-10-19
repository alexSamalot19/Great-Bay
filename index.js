// CLI inputs for logic and search term
// const userInput = process.argv[2];
// const userQuery = process.argv.slice(3).join(' ');
const inquirer = require('inquirer');


/**
 * Get the user input using Inquirer lib
 * @return {Promise} an Inquirer promise that resolves with
 * an answers object
 */
// function getUserInputAsync() {
return inquirer.prompt([
  {
    name: 'type',
    message: 'Would you like to Bid or Sell?',
    type: 'list',
    choices: ['Bid', 'Sell'],
    default: 'Bid',
  },
]).then(function(inquirerResponse) {
  console.log(inquirerResponse.type);
  // getUserInputAsync(inquirerResponse.type);
  switch (inquirerResponse.type) {
    case 'Sell':
      postThis();
      break;

    case 'Bid':
      bidThis();
      break;
  }
}


);




function postThis() {
  console.log('You chose post');
}



function bidThis() {
  console.log('You chose bid');
}
