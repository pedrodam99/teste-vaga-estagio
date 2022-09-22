import { useEffect } from "react";
import { useState } from "react";

export default function CompanyTable() {
  const [empresas, setEmpresas] = useState([]);

  const db = JSON.parse(localStorage.getItem("database")) ?? [];

  useEffect(() => {
    setEmpresas(db);
  }, []);

  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl my-3 text-indigo-800">Empresas Cadastradas</h1>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome da Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {db.map((empresa) => (
            <tr className="border-b border-indigo-700 h-12">
              <td>{empresa.cnpj}</td>
              <td>{empresa.nome_empresa}</td>
              <td>
                <button
                  className="font-bold text-blue-400 hover:text-blue-900"
                  onClick={handleClick}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
