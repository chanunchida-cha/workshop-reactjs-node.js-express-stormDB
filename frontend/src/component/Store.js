import { makeAutoObservable } from "mobx";
import axios from "axios";
const url = "http://localhost:3001/employees";

class Store {
  employees = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadAllEmployee() {
    axios.get(url).then((response) => {
      this.employees = response.data;
      console.log(response);
    });
  }
  createNewEmp(newEmp) {
    axios
      .post(url, {
        id: newEmp.id,
        firstName: newEmp.firstName,
        lastName: newEmp.lastName,
        jobTitle: newEmp.jobTitle,
        division: newEmp.division,
      })
      .then((response) => {
        this.employees.push(response.data);
        console.log(response);
      })
      .then(() => {
        this.loadAllEmployee();
      });
  }

  deleteEmp(id) {
    axios.delete(`${url}/${id}`).then(() => {
      this.loadAllEmployee();
    });
  }
  updateEmp(id, editeEmp) {
    axios
      .put(`${url}/${id}`, {
        id: editeEmp.id,
        firstName: editeEmp.firstName,
        lastName: editeEmp.lastName,
        jobTitle: editeEmp.jobTitle,
        division: editeEmp.division,
      })
      .then(() => {
        this.loadAllEmployee();
      });
  }
}

export const store = new Store();
