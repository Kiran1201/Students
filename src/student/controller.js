const pool = require('../../database');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    // check email
    pool.query(queries.checkEmail, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists..");
        }
    })
    //Add student
    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
        if (error) throw error;
        res.status(201).send("Student added successfully");
    })
}

const deleteById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentExist = !results.rows.length;
        if (noStudentExist) {
            res.send("student id does not exist");
        }
    })
    pool.query(queries.deleteById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Deleted successfully");
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentExist = !results.rows.length;
        if (noStudentExist) {
            res.send("student id does not exist");
        }
    })
    pool.query(queries.updateStudent, [name, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student update successfully.");
    })

}

const getStudentByName = (req, res) => {
    const  name  = req.body;
    console.log("Name :" , name);
    pool.query(queries.getStudentByName, [name], (error, results) => {
      
        const checkName = !results.rows.length;
        if (checkName) {
            res.send("Student name does not exist");
        }
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteById,
    updateStudent,
    getStudentByName,
}