import EmployeesList from "./component/EmployeesList";
import FormCreate from "./component/FormCreate";

import "./App.css";
function App() {
  return (
    <center>
      <div className="App">
        <FormCreate />
        <EmployeesList />
      </div>
    </center>
  );
}

export default App;
