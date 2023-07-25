import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // console.log(pacientes.length === 0);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-700 font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Paciente</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tus pacientes {""}
            <span className="text-indigo-700 font-bold">
              y se mostrarán acá.
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default ListadoPaciente;
