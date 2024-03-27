const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Students API',
      version: '1.0.0',
      description: 'API for student information.',
    },
    servers : [{
        url : 'http://localhost:3000/'
    }]
  },
  apis: ['src/student/routes.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
