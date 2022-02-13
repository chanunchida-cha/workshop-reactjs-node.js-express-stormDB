const { Router } = require("express");
const employeeController = require("../controllers/employeeController");

const router = Router();
//get all
router.route("/").get(employeeController.getAll);
// get by id
router.route("/:id").get(employeeController.getById);
//Create a book
router.route("/").post(employeeController.create);
//Delete
router.route("/:id").delete(employeeController.deleteById);
//Update
router.route("/:id").put(employeeController.updateById);

module.exports = router;
