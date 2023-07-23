import Paciente from "./Paciente";

const ListadoPaciente = () => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus
        <span className="text-indigo-700 font-bold">Pacientes y citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />

    </div>
  );
}
export default ListadoPaciente;
