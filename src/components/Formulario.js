import React,{Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';//agrega id 
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //crear state de citas
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    });
    const [error, actualizarError] = useState(false);

    //funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        actualizarCita({...cita, [e.target.name]: e.target.value })
    };
    //extraemos los valores para hacer una validacion
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //cuando el usuario presiona agregar cita 
    const submitCita = e => {
        e.preventDefault();
    
        // validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' ||sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        // eliminar el mensaje previo de alerta
        actualizarError(false);

        // Asignar un id 
        cita.id = uuid();
        
        //crear la cita
        crearCita(cita);

        //reiniciar el form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    }
    return ( 
       <Fragment>
           <h2>Crear Cita</h2>

           {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}

           <form
                onSubmit={submitCita}
           >
               <label>Nombre Mascota:</label>
               <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value = {mascota}
               />
                <label>Nombre Dueño:</label>
               <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value = {propietario}
               />
                <label>Fecha:</label>
               <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value = {fecha}

               />
                <label>Hora</label>
               <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value = {hora}
               />
                <label>Síntomas</label>
               <textarea 
                 className="u-full-width"
                 name="sintomas"
                 onChange={actualizarState}
                 value = {sintomas}
               ></textarea>
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
           </form>
       </Fragment>
     );
}

Formulario.propTypes= {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;