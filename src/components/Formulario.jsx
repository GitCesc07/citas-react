import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enviando formulario...");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-6">
        Añade Pacientes y{" "}
        <span className="text-indigo-700 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre de la Mascota:
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-1 mt-2 rounded-md placeholder-slate-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre del Propietario:
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-1 mt-2 rounded-md placeholder-slate-500"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu Email"
            className="border-2 w-full p-1 mt-2 rounded-md placeholder-slate-500"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha-alta"
          >
            Fecha de Alta:
          </label>
          <input
            type="date"
            id="fecha-alta"
            className="border-2 w-full p-1 mt-2 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas:
          </label>
          <textarea
            name=""
            id="sintomas"
            className="border-2 w-full p-1 mt-2 rounded-md placeholder-slate-500"
            placeholder="Describe los síntomas"
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white rounded-lg uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
