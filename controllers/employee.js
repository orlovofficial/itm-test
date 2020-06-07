const { Employee } = require('../db');

module.exports.getAll = function (req, res) {
  Employee.findAll().then((data) => {
    res.status(200).json({data});
  }).catch(err => console.log(err));
};

module.exports.remove = function (req, res) {
  const id = req.params.id;
  Employee.destroy({where: {employeeId: id}}).then(() => {
    res.status(200).json({message: 'Сотрудник удален успешно'});
  }).catch(err => console.log(err));
};

module.exports.create = function (req, res) {

  if(!req.body) return res.sendStatus(400);

  const newFirstName = req.body.firstName;
  const newLastName = req.body.lastName;
  const newDepartmentId = req.body.departmentId;
  Employee.create({
    firstName: newFirstName,
    lastName: newLastName,
    departmentId: newDepartmentId
  }).then((data) => {
    res.status(200).json(data);
  }).catch(err => console.log(err));


};

module.exports.update = function (req, res) {

  if(!req.body) return res.sendStatus(400);

  const newFirstName = req.body.firstName;
  const newLastName = req.body.lastName;
  const newDepartmentId = req.body.departmentId;
  const id = req.body.employeeId;
  Employee.update({
    firstName: newFirstName,
    lastName: newLastName,
    departmentId: newDepartmentId
  }, {where: {employeeId: id} }).then(() => {
    res.status(200).json({message: 'Сотрудник изменен успешно'});
  }).catch(err=>console.log(err));
};

