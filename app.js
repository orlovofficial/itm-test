const express = require('express');
const bodyParser = require('body-parser');
const departmentRoutes = require('./routes/department');
const employeeRoutes = require('./routes/employee');
const app = express();

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/department', departmentRoutes);
app.use('/api/employee', employeeRoutes);

module.exports = app;
