import React from 'react';
import Tarea from './Tarea';

const ListadoTarea = () => {

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataformas de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ];

    return ( 
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas" >
                {tareas.length===0 ? <li className="tarea"><p>No hay tareas</p></li>
                : tareas.map(elemento => (
                    <Tarea tareas={elemento} />
                )) }
                <button
                type="button"
                className="btn btn-eliminar"
            >
                Eliminar Proyecto &times;
            </button>
            </ul>
            
        </>
     );
}
 
export default ListadoTarea;