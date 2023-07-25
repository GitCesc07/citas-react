

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente");

    if(respuesta) {
      eliminarPaciente(id);
      alert("El paciente se elimino correctamente");
    }
  }

  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Nombre:{" "}
        <span className="font-bold normal-case text-indigo-700">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Propietario:{" "}
        <span className="font-bold normal-case text-indigo-700">
          {propietario}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Email:{" "}
        <span className="font-bold normal-case text-indigo-700">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Fecha de Alta:{" "}
        <span className="font-bold normal-case text-indigo-700">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Síntomas:{" "}
        <span className="font-bold normal-case text-indigo-700">
          {sintomas}
        </span>
      </p>

      <div className="sm:flex md:block lg:flex justify-between mt-8">
        <button
          type="button"
          className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white rounded-md uppercase flex gap-2 items-center justify-center font-bold w-full mb-5 sm:w-52 md:mb-5 lg:mb-0 sm:mb-0"
          onClick={() => setPaciente(paciente)}
        >
          Editar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-file-pencil"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z" />
          </svg>
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md uppercase flex gap-2 items-center justify-center font-bold w-full sm:w-52"
          onClick={handleEliminar}
        >
          Eliminar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Paciente
