import module from "./App.module.css";
import CompanyTable from "./components/CompanyTable";
import Form from "./components/Form";

function App() {
  function createCompany(company) {
    console.log(company);
  }

  return (
    <div className={module.form_container}>
      <Form handleSubmit={createCompany} />
      <CompanyTable></CompanyTable>
    </div>
  );
}

export default App;
