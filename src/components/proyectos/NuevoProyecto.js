import React, {useState} from 'react';

const NuevoProyecto = () => {

    // State para Nuevo Proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ""
    })
    // Lectura de nombre de proyecto
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    // Extraer value de nombre 
    const {nombre} = proyecto;
    // cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        // Validar el proyecto
        
    }
    return ( 
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
            <form 
                className="formulario-nuevo-proyecto"
            >
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={onChangeProyecto}
                    value={nombre}
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                    onSubmit={onSubmitProyecto}
                />

            </form>
        </>
     );
}
 
export default NuevoProyecto;