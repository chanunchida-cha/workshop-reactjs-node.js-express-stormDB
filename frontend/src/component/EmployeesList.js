import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { store } from "./Store";
import "./EmployeeList.css";

const EmployeesList = observer(() => {
  const [editeNote, setEditeNote] = useState(null);

  useEffect(() => {
    store.loadAllEmployee();

  }, []);

  function onEditValueChange(event) {
    const { name, value } = event.target;
    setEditeNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function updateEmp(event) {
    event.preventDefault();
    store.employees.map((employee) => {
      if (employee.id !== editeNote.id) return employee;
      return store.updateEmp(employee.id, editeNote);
    });
    setEditeNote(null);
  }

  let editNoteElement = null;
  if (!!editeNote) {
    editNoteElement = (
      <div className="app-edit-note">
        <div className="container-edit">
          <form onSubmit={updateEmp}>
            <div className="app-header">Form Edite</div>
            <div className="input-text">
              <label className="label-edite">First name: </label>
              <br />
              <input
                type="text"
                name="firstName"
                className="input"
                value={editeNote.firstName}
                onChange={onEditValueChange}
              />
            </div>
            <div>
              <label className="label-edite">Last name: </label>
              <br />
              <input
                type="text"
                name="lastName"
                className="input"
                value={editeNote.lastName}
                onChange={onEditValueChange}
              />
            </div>
            <div>
              <label className="label-edite">Job Title: </label>
              <br />
              <input
                type="text"
                name="jobTitle"
                className="input"
                value={editeNote.jobTitle}
                onChange={onEditValueChange}
              />
            </div>

            <div>
              <label className="label-edite">Division: </label>
              <br />
              <input
                type="text"
                name="division"
                className="input"
                value={editeNote.division}
                onChange={onEditValueChange}
              />
            </div>
            <button className="btn-update">Edite</button>
            <button
              className="btn-cancle"
              onClick={() => {
                setEditeNote(null);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <center>
      <div>
        <ul>
          {store.employees.map((employee) => {
            const deleteEmp = () => {
              store.deleteEmp(employee.id);
            };
            return (
              <div key={employee.id} className="emp-container">
                <div>
                  Name : {employee.firstName} {employee.lastName}
                </div>
                <div>Job Title : {employee.jobTitle}</div>
                <div>Job Title : {employee.division}</div>

                <div>
                  <button
                    className="btn-edite"
                    onClick={() => {
                      setEditeNote(employee);
                    }}
                  >
                    <i class="far fa-edit"></i>
                  </button>
                  <button onClick={deleteEmp} className="btn-delete">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div>{editNoteElement}</div>
    </center>
  );
});

export default EmployeesList;
