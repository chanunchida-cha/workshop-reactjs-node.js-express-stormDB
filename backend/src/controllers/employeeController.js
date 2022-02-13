const db = require("../model/stormDB");
const { v4: uuidv4 } = require("uuid");


const getAll = (req, res) => {
  const employees = db.get("employees").value();

  res.send(employees);
};

const create = (req, res) => {
  const employee = req.body;
  db.get("employees").push(employee).save();

  res.status(201).send({
    success: "create ok",
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  const employees = db.get("employees").value();
  const employee = employees.filter((employee) => employee.id == id);
  res.send(employee);
};

const deleteById = (req, res) => {
  const { id } = req.params;
  db.get("employees")
    .filter((employee) => employee.id != id)
    .save();

  res.status(200).send({
    success: "delete ok",
  });
};

const updateById = (req, res) => {
  const { id } = req.params;
  const employee = req.body;
  const employees = db.get("employees").value();
  const indexBook = employees.findIndex((employee) => employee.id == id);
  db.get("employees").get(indexBook).set(employee).save();

  res.status(200).send({
    success: "update ok",
  });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
