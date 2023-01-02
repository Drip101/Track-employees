require('console.table')
const { prompt } = require('inquirer');
const { updateEmployeeRole } = require('./db');
const db = require("./db");
const { format } = require('./db/connection');

function start() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: "view all departments",
                    value: "VIEW_DEPARTMENTS"
                },

                {
                    name: "view all roles",
                    value: "VIEW_ROLES"
                },

                {
                    name: "view all employees",
                    value: "VIEW_EMPLOYEES"
                },

                {
                    name: "add a department",
                    value: "ADD_DEPARTMENT"
                },

                {
                    name: "add a role",
                    value: "ADD_ROLE"
                },

                {
                    name: "add an employee",
                    value: "ADD_EMPLOYEE"
                },

                {
                    name: "update an employee role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },

                {
                    name: "quit",
                    value: "QUIT"
                }
            ]
        }
    ])
        .then(res => {
            let choice = res.choice
            switch (choice) {
                case "VIEW_DEPARTMENTS":
                    viewDepartments();
                    break;
                case "VIEW_ROLES":
                    viewRoles();
                    break;
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;
                case "ADD_DEPARTMENT":
                    addDepartment();
                    break;
                case "ADD_ROLE":
                    addRole();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE_ROLE":
                    updateEmployeeRole();
                    break;
                default:
                    quit();
            }
        })
}
function viewDepartments() {
    db.findAllDepartments().then(([rows]) => {
        let departments = rows;
        console.table(departments)
    }).then(() => start())
}

function viewRoles() {
    db.findAllRoles().then(([rows]) => {
        let roles = rows;
        console.table(roles)
    }).then(() => start())
}

function viewEmployees() {
    db.findAllEmployees().then(([rows]) => {
        let employees = rows;
        console.table(employees)
    }).then(() => start())
}

function addEmployee() {
    prompt([
        {
            name: "first_name",
            message: "what is your first name?"
        },

        {
            name: "last_name",
            message: "what is your last name?"
        }
    ]).then(res => {
        let firstName = res.first_name;
        let lastName = res.last_name;
        db.findAllRoles().then(([rows]) => {
            ;
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            }));
            prompt(
                {
                    type: 'list',
                    name: 'roleId',
                    message: "What is the employee's role?",
                    choices: roleChoices
                }).then(res => {
                    let roleId = res.roleId;
                    db.findAllEmployees().then(([rows]) => {
                        let employees = rows;
                        const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                            name: `${first_name} ${last_name}`,
                            value: id
                        }));
                        managerChoices.unshift({ name: "None", value=null });
                        prompt({
                            type: 'list',
                            name: 'managerId',
                            message: "Who is the employee's manager?",
                            choices: managerChoices
                        }).then(res => {
                            let employee = {
                                manager_id: res.managerId,
                                role_id: roleId,
                                first_name: firstName,
                                last_name: lastName
                            }
                            db.createEmployee(employee);
                        }).then(() => console.log(`added ${firstName} ${lastName} to the database`))
                    }).then(() => start())
                }

    function addRole() {
                        //method find departments.then rows, department choices interation 
                        //create prompt
                        //3 prompts
                    }

    function addDepartment() {
                        prompt([
                            {
                                name: "name",
                                message: "what is your department name?"
                            }
                        ]).then(res => {
                            let name = res;
                            db.createDepartment(name).then(() => start())
                        })
                    }

    function updateEmployeeRole() {
                        // find all employees
                        // find all roles

                    }

    function quit() {
                        console.log("goodbye")
                        process.exit();
                    }
    start();
