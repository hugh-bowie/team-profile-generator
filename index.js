const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');
const generateTemplates = require('./src/template.js')

// empty array to be filled by input responses
const team = [];

// initialize the prompts
function inputInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's Name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Employee's Name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this Employee's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter Employee's ID")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this Employee's email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Employee's email address")
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please choose Employee's Role",
            choices: ['Engineer', 'Intern', 'Manager']
        },
    ]).then(answers => {
        if (answers.role === 'Manager') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is this Manager's office number",
                    validate: officeNumberInput => {
                        if (officeNumberInput) {
                            return true;
                        } else {
                            console.log("Please enter Manager's office number")
                            return false;
                        }
                    }
                }
            ]).then(reply => {
                const managerAdded = new Manager(answers.name, answers.id, answers.email, answers.role, reply.officeNumber);
                team.push(managerAdded);
                addMember();
            })
        } else if (answers.role === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "What is this Engineers GitHub?",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            console.log("Please enter Engineers GitHub Username")
                            return false;
                        }
                    }
                }
            ]).then(reply => {
                const EngineerAdded = new Engineer(answers.name, answers.id, answers.email, answers.role, reply.gitHub);
                team.push(EngineerAdded);
                addMember();
            })
        } else if (answers.role === 'Intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "What school does this intern attend?",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("Please enter Intern's school name")
                            return false;
                        }
                    }
                }
            ]).then(reply => {
                const internAdded = new Intern(answers.name, answers.id, answers.email, answers.role, reply.school);
                team.push(internAdded);
                addMember();
            })
        }

    })

    function addMember() {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'addMore',
                message: 'Would you like to add a team memeber?'
            }
        ]).then(result => {
            if (result.addMore === true) {
                inputInfo(team);
            } else {

                let infoHTML = generateTemplates(team);
                fs.writeFile('./dist/index.html', infoHTML, (err) =>
                    err ? console.log(err) : console.log('Index.html file created')
                );
            }
        })
    }
}

inputInfo();
