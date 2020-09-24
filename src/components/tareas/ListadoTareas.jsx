import React, { useContext } from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyectoz, deleteProyecto } = proyectosContext

  const tareasContext = useContext(TareaContext)
  const { tareasproyecto } = tareasContext

  if (!proyectoz) return <h2>Selecciona un Proyecto</h2>

  const [proyectoActual] = proyectoz

  const handleClick = () => {
    deleteProyecto(proyectoActual.id)
  }

  return (
    <div>
      <h2>
        Proyecto:
        {proyectoActual.nombre}
      </h2>

      <ul className='listado-tareas'>
        { tareasproyecto.length === 0
          ? (<li><p>No hay Tareas</p></li>)
          : tareasproyecto.map((tarea) => (
            <Tarea
              tarea={tarea}
            />
          ))}
      </ul>

      <button
        type='button'
        className='btn btn-eliminar'
        onClick={handleClick}
      >
        Eliminar Proyecto &times;
      </button>
    </div>
  )
}

export default ListadoTareas
