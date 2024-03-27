const express = require('express');
const studentRoutes = require("./src/student/routes");
const swagger = require('./swagger');
const swaggerUi = require('swagger-ui-express');


const app = express();
const port = 3000;
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));


app.use("/api/v1/students", studentRoutes);



app.listen(port, () => console.log(`app listening on the  ${port}`));