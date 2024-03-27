const express = require('express');
const studentRoutes = require("./src/student/routes");
const swagger = require('./swagger');
const swaggerUi = require('swagger-ui-express');


const app = express();
const port = 3000;
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));


app.use("/api/v1/students", studentRoutes);



const PORT = port || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});