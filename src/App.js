import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {

  //Arreglo de Citas
  const [citas, guardarCitas] = useState([]);


  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
  }

  //funcion que eliminar una cita por in
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //mensaje condicional 
  const titulo = citas.length === 0 ? 'No hay citas' : "Administra tus Citas";


  return (
   <Fragment>
     <h1>Administrador de citas</h1>

     <div className="container">
       <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}            
            />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita
                  key = {cita.id}
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />
              ))}
          </div>
       </div>
     </div>
   </Fragment>
  );
}

export default App;
