import React, { useContext } from 'react'
import TareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({ tarea }) => {
  const tareasContext = useContext(TareaContext)
  const { eliminarTarea, getTareas } = tareasContext

  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  const [proyectoActual] = proyecto

  const handleClick = () => {
    eliminarTarea(tarea.id)
    getTareas(proyectoActual.id)
  }

  return (
    <li className='tarea sombra'>
      <p>{ tarea.nombre }</p>

      <div className='estado'>
        {tarea.estado
          ? (
            <button
              type='button'
              className='completo'
            >
              Completo
            </button>
          )
          : (
            <button
              type='button'
              className='incompleto'
            >
              Incompleto
            </button>
          )}
      </div>

      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
        >
          Editar

        </button>

        <button
          type='button'
          className='btn btn-secundario'
          onClick={handleClick}
        >
          Eliminar

        </button>
      </div>
    </li>
  )
}

export default Tarea
