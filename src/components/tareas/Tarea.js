import React from 'react';

const Tarea = ({tareas}) => {
    return ( 
        <li className="tarea sombra">
            <p>{tareas.nombre}</p>
            <div className="estado">
                {tareas.estado ? <button type="button" className="completo">Completo</button> 
                : <button type="button" className="incompleto">Pendiente</button> }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                >
                    Eliminar
                </button>
            </div>
            
        </li>
     );
}
 
export default Tarea;