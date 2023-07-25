import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(Object.keys(paciente));

    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const clarData = () => {
    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Debes de llenar todos los campos requeridos");
      setError(true);
      clarData;
    }

    setError(false);

    // Objeto de pacientes
    const objtPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      const respuestaEditar = confirm("¿Desea editar este paciente?");

      if (respuestaEditar) {
        // Editando el Registro
        objtPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objtPaciente : pacienteState
        );

        setPacientes(pacientesActualizados);
        setPaciente({});
        alert("El paciente se edito correctamente");
        clarData();
      }
    } else {
      const respuestaAgregar = confirm("¿Desea agregar este paciente?");

      if (respuestaAgregar) {
        // Nuevo Registro
        objtPaciente.id = generarId();
        setPacientes([...pacientes, objtPaciente]);
        alert("El paciente se agrego correctamente");
         clarData();
      }
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
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
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

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
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
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
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white rounded-lg uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
