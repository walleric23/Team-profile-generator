const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/Intern");
const team = [];
// prompt of questions for manager
inquirer
  .prompt([
    {
      type: "input",
      message: "what is the managers name?",
      name: "Name",
    },
    {
      type: "input",
      message: "what is the managers email?",
      name: "email",
    },
    {
      type: "input",
      message: "what is the managers ID number?",
      name: "ID",
    },
    {
      type: "input",
      message: "what is the managers office number?",
      name: "officeNumber",
    },
  ])
  // pushes user input in team array
  .then((res) => {
    const manager = new Manager(res.Name, res.email, res.ID, res.officeNumber);
    team.push(manager);
    menu();
  });
function menu() {
  // asks user what they would like to do after creating manager
  inquirer
    .prompt({
      type: "list",
      message: "what would you like to do?",
      name: "action",
      choices: ["add intern", "add engineer", "build team"],
    })
    .then((res) => {
      if (res.action === "add intern") {
        addIntern();
      } else if (res.action === "add engineer") {
        addEngineer();
      } else {
        buildTeam();
      }
    });
}
// if user chooses to add engineer they are prompted with these questions
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the engineer name?",
        name: "Name",
      },
      {
        type: "input",
        message: "what is the engineer email?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the engineer ID number?",
        name: "ID",
      },
      {
        type: "input",
        message: "what is the engineers Github?",
        name: "github",
      },
    ])
    // user input pushed into team array
    .then((res) => {
      const engineer = new Engineer(res.Name, res.email, res.ID, res.github);
      team.push(engineer);
      menu();
    });
}
// if user adds an intern they are prompted with these questions
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the intern name?",
        name: "Name",
      },
      {
        type: "input",
        message: "what is the intern email?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the intern ID number?",
        name: "ID",
      },
      {
        type: "input",
        message: "what is the interns school?",
        name: "school",
      },
      // user input is pushed into team array
    ])
    .then((res) => {
      const intern = new Intern(res.Name, res.email, res.ID, res.school);
      team.push(intern);
      menu();
    });
}
// function to start building teams with some bootstrap and pulling data from userinput
function buildTeam() {
  let employeeHTML = team
    .map((member) => {
      return `<div class="card" style="width: 18rem;">
              <img src="./assets/images/${member.getRole()}-photo.jpg" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Position: ${member.getRole()}</li>
              <li class="list-group-item">ID: ${member.id}</li>
              <li class="list-group-item">Email: ${member.email}</li>
              <li class="list-group-item"> ${member.getTrait()}</li>

              </ul>
      </div>`;
    })
    .join("\n");

  let HTML = `<!doctype html>
      <html lang="en">
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
          
              <title>Hello, world!</title>
          </head>
          <body class="d-flex p-2 bd-highlight">
          ${employeeHTML}
              <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
          
          </body>
      </html>`;
  fs.writeFile("./dist/index.html", HTML, (err) => {
    console.log("Team Generated");
  });
  console.log(HTML);
  console.log(team);
}
