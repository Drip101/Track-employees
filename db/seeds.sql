INSERT INTO department (department_name)
VALUES ("HR Department"),
       ("Enterprise Department"),
       ("Recruiting Department"),
       ("Finance Department"),
       ("Helpdesk Department");

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service" , 40000, 5),
       ("IT", 60000, 2),
       ("ET representative", 120000, 2),
       ("Finance Representative", 80000, 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Amber", "Sweet", 4),
        ("Alex", "Moore", 2),
        ("Nicolas", "Ball", 3),
        ("Matt", "Dunn", 1);
