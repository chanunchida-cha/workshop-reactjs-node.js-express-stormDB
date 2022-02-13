import React, { useState } from "react";
import { store } from "./Store";
import { observer } from "mobx-react-lite";
import "./FormCreate.css";
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

let genId = uuidv4();
const startEmp = {
  id: genId,
  firstName: "",
  lastName: "",
  jobTitle: "",
  division: "",
};
const FormCreate = observer(() => {
  const [employee, setEmployee] = useState(startEmp);

  function onNoteValuechange(event) {
    const { name, value } = event.target;
    setEmployee((prevEmp) => {
      return {
        ...prevEmp,
        [name]: value,
      };
    });
  }
  const saveEmp = (event) => {
    store.createNewEmp(employee);
    console.log(employee);
    setEmployee(startEmp);
  };

  //Elements

  return (
    <center>
      <div className="app-container">
        <form onSubmit={saveEmp}>
          <div className="app-header">Project Workshop</div>
          <div className="input-text">
            <label className="label-text">First name: </label>
            <br />
            <input
              type="text"
              name="firstName"
              placeholder="input your first name"
              className="input"
              value={employee.firstName}
              onChange={onNoteValuechange}
              required
            />
          </div>
          <div>
            <label className="label-text">Last name: </label>
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="input your last name"
              className="input"
              value={employee.lastName}
              onChange={onNoteValuechange}
              required
            />
          </div>
          <div>
            <label className="label-text">Job Title: </label>
            <br />
            <input
              type="text"
              name="jobTitle"
              className="input"
              placeholder="input your Job Title"
              value={employee.jobTitle}
              onChange={onNoteValuechange}
              required
            />
          </div>

          <div>
            <label className="label-text">Division: </label>
            <br />
            <input
              type="text"
              name="division"
              className="input"
              placeholder="input your Division"
              value={employee.division}
              onChange={onNoteValuechange}
              required
            />
          </div>
          <div className="button-container">
            <button className="button-add" type="submit">
              <i class="fas fa-plus-square"></i>
            </button>
          </div>
        </form>
      </div>
    </center>
  );
});

export default FormCreate;
