import module from "./App.module.css";
import CompanyTable from "./components/CompanyTable";
import Form from "./components/Form";

function App() {
  return (
    <div className={module.form_container}>
      <Form />
      <CompanyTable></CompanyTable>
    </div>
  );
}

export default App;
