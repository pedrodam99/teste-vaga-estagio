import SubmitButton from "../SubmitButton";
import ClearButton from "../ClearButtton";
import Input from "../Input";
import Select from "../Select";
import { useState } from "react";
import { useEffect } from "react";

export default function Form(companyData = {}) {
  const [company, setCompany] = useState(companyData);
  const [UF, setUF] = useState([]);

  const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("database")) ?? [];

  const setLocalStorage = (companyData) =>
    localStorage.setItem("database", JSON.stringify(companyData));

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((res) => res.json())
      .then((estados) => {
        setUF(estados);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e) {
    setCompany((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSelect(e) {
    setCompany({
      ...company,
      state: {
        id: e.target.name,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleClear(e) {
    e.preventDefault();
    window.location.reload();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbProd = getLocalStorage();
    dbProd.push(company);
    setLocalStorage(dbProd);
    window.location.reload();
  };

  return (
    <div className="p-2 border-1">
      <form onSubmit={handleSubmit} className="grid grid-cols-12  gap-3 ">
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

        <div className="col-span-12 sm:col-span-7">
          <Input
            type="text"
            text="Bairro"
            name="bairro"
            handleOnChange={handleChange}
          />
        </div>

        <div className="col-span-12 sm:col-span-2">
          <Select
            name="UF"
            id="UF"
            handleOnChange={handleSelect}
            options={UF}
            value={"rondoni"}
          />
        </div>

        <div className="col-span-12 sm:col-span-3">
          <Select name="Cidade" id="cidade" handleOnChange={handleSelect} />
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <ClearButton handleOnClick={handleClear} text="Cancelar" />
          <SubmitButton text="Salvar" />
        </div>
      </form>
    </div>
  );
}
