import {
  TAREAS_PROYECTO,
  ADD_TAREA,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter((tarea) => tarea.proyectoId === action.payload),
      }

    case ADD_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      }

    default:
      return state
  }
}
