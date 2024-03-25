const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE ID = $1";
const checkEmail = "SELECT s FROM students s WHERE email = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteById = "DELETE FROM students WHERE ID = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE ID = $2";
const getStudentByName = "SELECT * FROM students  WHERE name = $1";

module.exports = {
    getStudents,
    getStudentById,
    checkEmail,
    addStudent,
    deleteById,
    updateStudent,
    getStudentByName,
}