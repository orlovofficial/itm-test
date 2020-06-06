const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('dbitm', 'root', 'itmrootpass', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

class Department extends Model {}
Department.init({
  departmentId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  description: DataTypes.STRING
}, { sequelize, modelName: 'department' });

class Employee extends Model {}
Employee.init({
  employeeId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  departmentId: DataTypes.INTEGER
}, { sequelize, modelName: 'employee' });

module.exports = {
  sequelize,
  Department,
  Employee
};
