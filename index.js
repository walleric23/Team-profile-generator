const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/manager");
const team = [];
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
  .then((res) => {
    const manager = new Manager(res.Name, res.email, res.ID, res.officeNumber);
    team.push(manager);
    menu();
  });
function menu() {
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
      }
    });
}
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
    .then((res) => {
      const engineer = new Engineer(res.Name, res.email, res.ID, res.github);
      team.push(engineer);
      menu();
    });
}
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
    ])
    .then((res) => {
      const intern = new Intern(res.Name, res.email, res.ID, res.school);
      team.push(intern);
      menu();
    });
}
function buildTeam() {
  let employeeHTML = "";
  //   make a 4 loop that loops over team array and adds to HTML string and adds using userinput
  let HTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
    ${employeeHTML}
    </body>
  </html>`;
  fs.writeFile("./dist/index.html", HTML, (err) => {
    console.log("Team Generated");
  });
}
