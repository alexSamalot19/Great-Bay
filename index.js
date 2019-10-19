// CLI inputs for logic and search term
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");




// Logic for the correct API based on CLI
function userCommand(userInput, userQuery) {

  switch (userInput) {
      case "post-an-item":
          postThis();
          break;

      case "bid-on-an-item":
          bidThis();
          break;
  }
};


userCommand(userInput, userQuery);

function postThis() {

}



function bidThis(){

}