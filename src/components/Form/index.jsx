import SubmitButton from "../SubmitButton";
import ClearButton from "../ClearButtton";
import Input from "../Input";
import Select from "../Select";
import { useState } from "react";

export default function Form(companyData = {}) {
  const [company, setCompany] = useState(companyData);

  const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("database")) ?? [];

  const setLocalStorage = (companyData) =>
    localStorage.setItem("database", JSON.stringify(companyData));

  const submit = (e) => {
    e.preventDefault();

    const dbProd = getLocalStorage();
    dbProd.push(company);
    setLocalStorage(dbProd);
    console.log("foi");
  };

  function handleChange(e) {
    setCompany({ ...company, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setCompany({
      ...company,
      state_city: {
        id: e.target.name,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-12  gap-3 ">
      <h1 className="col-span-12 text-2xl mb-2 text-indigo-800">
        Formulário de Cadastro
      </h1>

      <div className="col-span-12 sm:col-span-3">
        <Input
          type="number"
          text="CNPJ"
          name="cnpj"
          handleOnChange={handleChange}
        />
      </div>

      <div className="col-span-12 sm:col-span-9 ">
        <Input
          type="text"
          text="Nome da Empresa"
          name="nome_empresa"
          handleOnChange={handleChange}
        />
      </div>

      <div className="col-span-12 sm:col-span-3">
        <Input
          type="text"
          text="CEP"
          name="CEP"
          handleOnChange={handleChange}
        />
      </div>

      <div className="col-span-12 sm:col-span-7">
        <Input
          type="text"
          text="Endereço"
          name="endereco"
          handleOnChange={handleChange}
        />
      </div>

      <div className="col-span-12 sm:col-span-2">
        <Input
          type="number"
          text="Número"
          name="numero"
          handleOnChange={handleChange}
        />
      </div>

      <div className="col-span-12 sm:col-span-8">
        <Input
          type="text"
          text="Bairro"
          name="bairro"
          handleOnChange={handleChange}
        />
      </div>

      <div className="col-span-12 sm:col-span-1">
        <Select name="UF" handleOnChange={handleSelect} />
      </div>

      <div className="col-span-12 sm:col-span-3">
        <Select name="Cidade" text="Guarulhos" handleOnChange={handleSelect} />
      </div>

      <div className="flex flex-row sm:flex-column gap-2">
        <span className="bg-gray-500 px-10 py-3  hover:bg-gray-700  text-white">
          <ClearButton text="Cancelar" />
        </span>
        <span className="bg-indigo-500 px-10 py-3  hover:bg-indigo-700   text-white">
          <SubmitButton text="Salvar" />
        </span>
      </div>
    </form>
  );
}
