
// Import and require mysql2
const mysql = require('mysql2');
require('console.table')
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);
const inquirer = require('inquirer');

function start(){inquirer
  .prompt([
    {
      type: 'list',
      name: 'employees',
      message: 'What would you like to do?',
      choices: ['view all roles', 'view all employees', 'view all departments', 'add a department', 'add a role', 'add a employee', 'update an employee role'],
    },
  ])
  .then(answers => {
    if (answers.employees == 'view all roles') {
     db.promise().query(`SELECT role.id, title, salary, department_name FROM role LEFT JOIN department ON department_id = department.id`).then(([data]) => {
      console.table(data)
      start()
     })
    }
    if (answers.employees == 'view all departments'){
      db.promise().query(`SELECT department.id, department.name FROM department;`).then(([data]) => {
        console.table(data)
        start()
       })
    }
    if (answers.employees == 'view all employees'){
      db.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`).then(([data]) => {
        console.table(data)
        start()
       })
    }
    if (answers.employees == 'add a department'){
      db.promise().query(`INSERT INTO department SET?`).then(([data]) => {
        console.table(data)
        start()
       })
    }
    if (answers.employees == 'add a role'){
      db.promise().query(`INSERT INTO role SET?`).then(([data]) => {
        console.table(data)
        start()
       })
    }
    if (answers.employees == 'add an employee'){
      db.promise().query(`INSERT INTO employee SET?`).then(([data]) => {
        console.table(data)
        start()
       })
    }
    if (answers.employees == 'update an employee role'){
      db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`).then(([data]) => {
        console.table(data)
        start()
       })
    }
  });
}
start()


// Create a movie
// app.post('/api/new-movie', ({ body }, res) => {
// const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });

// Read all movies
// app.get('/api/movies', (req, res) => {
//   const sql = `SELECT id, movie_name AS title FROM movies`;
  
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// Delete a movie
// app.delete('/api/movie/:id', (req, res) => {
//   const sql = `DELETE FROM movies WHERE id = ?`;
//   const params = [req.params.id];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//       message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

// Read list of all reviews and associated movie name using LEFT JOIN
// app.get('/api/movie-reviews', (req, res) => {
//   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// BONUS: Update review name
// app.put('/api/review/:id', (req, res) => {
//   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//   const params = [req.body.review, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });
