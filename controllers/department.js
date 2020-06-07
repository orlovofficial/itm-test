const { Department } = require('../db');

module.exports.getAll = function (req, res) {
  Department.findAll().then((data) => {
    res.status(200).json({data});
  }).catch(err => console.log(err));

};

module.exports.remove = function (req, res) {
  const id = req.params.id;
  Department.destroy({where: {departmentId: id}}).then(() => {
    res.status(200).json({message: 'Отдел удален успешно'});
  }).catch(err => console.log(err));
};

module.exports.create = function (req, res) {
  if(!req.body) return res.sendStatus(400);

  const newName = req.body.name;
  const newDescription = req.body.description;
  Department.create({ name: newName, description: newDescription }).then((data) => {
    res.status(200).json(data);
  }).catch(err => console.log(err));
};

module.exports.update = function (req, res) {
  if(!req.body) return res.sendStatus(400);

  const newName = req.body.name;
  const newDescription = req.body.description;
  const id = req.body.departmentId;
  Department.update({name: newName, description: newDescription}, {where: {departmentId: id} }).then(() => {
    res.status(200).json({message: 'Отдел изменен успешно'});
  }).catch(err=>console.log(err));
};

