import {useState, useEffect} from "react"
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";

function App() {

  const pacienteLocalSt = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(pacienteLocalSt);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLocalStorage = () => {
  //     const pacienteLocalSt = JSON.parse(localStorage.getItem("pacientes")) ?? [];

  //    setPacientes(pacienteLocalSt)
  //   }
  //   obtenerLocalStorage();
  // }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteActualizados);
  }

  return (
    <div className="lg:container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
         pacientes={pacientes}
         setPacientes={setPacientes}         
         paciente={paciente}
         setPaciente={setPaciente}
         />

        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
         />
      </div>
    </div>
  );
}

export default App
