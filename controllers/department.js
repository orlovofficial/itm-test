const { Department } = require('../db');

module.exports.getAll = function (req, res) {
  Department.findAll().then(data => {
    res.status(200).json({data});
  }).catch(err => console.log(err));

};

module.exports.getById = function (req, res) {

};

module.exports.remove = function (req, res) {

};

module.exports.create = function (req, res) {
  if(!req.body) return res.sendStatus(400);

  const newName = req.body.name;
  const newDescription = req.body.description;
  Department.create({ name: newName, description: newDescription }).then((data) => {
    debugger;
    res.status(200).json(data);
  }).catch(err => console.log(err));
};

module.exports.update = function (req, res) {

};

