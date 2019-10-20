/**
 * @see {@link https://www.npmjs.com/package/mysql}
 */
const mysql = require('mysql');
const inquirer = require('inquirer');
const keys = require('./keys.js');

const sqlKey = (keys.SQL.Pass);

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: sqlKey,
  database: 'great_bay_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  doCRUD();
});

/**
 * Called by callback function upon successful establishment of DB connection.
 * @see {@link https://www.npmjs.com/package/mysql#performing-queries}
 */

function doCRUD() {
  getUserInputAsync();
}

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
}

function postThis() {
  console.log('You chose post');
  createProduct();
}



function bidThis() {
  console.log('You chose bid');
  updateProduct();
}

function createProduct() {
  console.log('Inserting a new item...\n');
  const query = connection.query(
      'INSERT INTO items SET ?',
      {
        item: 'PS4',
        price: 200.00,

      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + ' product inserted!\n');
        // Call updateProduct AFTER the INSERT completes
        // updateProduct();
      }
  );

  // logs the actual query being run
  console.log(query.sql);
}

/**
 * Updates a row in the DB
 */
function updateProduct() {
  console.log('Updating all Rocky based songs quantities...\n');
  const query = connection.query(
      'UPDATE items SET ? WHERE ?',
      [
        {
          item: 'soundtrack',
        },
        {
          price: 250,
        },
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + 'price updated!\n');
        // // Call deleteProduct AFTER the UPDATE completes
        // deleteProduct();
      }
  );

  // logs the actual query being run
  console.log(query.sql);
}
