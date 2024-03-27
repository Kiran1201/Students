/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The student ID.
 *         name:
 *           type: string
 *           description: The student's name.
 *         age:
 *           type: integer
 *           description: The student's age.
 *     StudentInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The student's name.
 *         age:
 *           type: integer
 *           description: The student's age.
 */

/**
 * @swagger
 * /api/v1/students/:
 *   get:
 *     summary: Get all students
 *     description: Retrieve a list of all students.
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *
 *   post:
 *     summary: Add a new student
 *     description: Add a new student to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *     responses:
 *       200:
 *         description: Successfully added the student.
 */

/**
 * @swagger
 * /api/v1/students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     description: Retrieve a student by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the student to get.
 *     responses:
 *       200:
 *         description: A student object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *
 *   delete:
 *     summary: Delete a student
 *     description: Delete a student from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the student to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted the student.
 *
 *   put:
 *     summary: Update a student
 *     description: Update an existing student in the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the student to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *     responses:
 *       200:
 *         description: Successfully updated the student.
 */

const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.delete("/:id", controller.deleteById);
router.put("/:id", controller.updateStudent);
router.get("/:name", controller.getStudentByName);

module.exports = router;