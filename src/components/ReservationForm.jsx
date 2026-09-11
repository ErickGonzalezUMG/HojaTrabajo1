import { useReducer, useState } from 'react'

const estadoInicial = {
  nombre: '',
  personas: '',
  correo: ''
}

function cambioEstado(estado, accion) {
  switch (accion.type) {
    case 'MODIFICACION':
      return { ...estado, [accion.campo]: accion.valor }
    case 'CLEAR':
      return estadoInicial
  }
}

function ReservationForm() {
  const [estado, dispatch] = useReducer(cambioEstado, estadoInicial)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  function cambioValor(e) {
    dispatch({ type: 'MODIFICACION', campo: e.target.name, valor: e.target.value })
  }

  function enviarFormulario(e) {
    e.preventDefault()
    setMensaje('')
    setError('')

    if (!estado.nombre || !estado.personas || !estado.correo) {
      setError('Todos los campos son obligatorios.')
      return
    }

    if (Number(estado.personas) <= 0) {
      setError('El número de personas debe ser mayor a 0.')
      return
    }

    setMensaje('¡Reservación enviada! ' + estado.nombre + ', tu reservación para ' + estado.personas + ' persona(s) fue registrada. Te contactaremos a ' + estado.correo)
    dispatch({ type: 'CLEAR' })
  }

  return (
    <div className="formulario-reservacion">
      <h2>Formulario de Reservación</h2>
      <form onSubmit={enviarFormulario}>
        <label>Nombre completo:</label>
        <input type="text" name="nombre" value={estado.nombre} onChange={cambioValor} />

        <label>Número de personas:</label>
        <input type="number" name="personas" value={estado.personas} onChange={cambioValor} />

        <label>Correo electrónico:</label>
        <input type="text" name="correo" value={estado.correo} onChange={cambioValor} />

        <button type="submit">Enviar Reservación</button>
      </form>

      {mensaje && <div className="mensaje-confirmacion">{mensaje}</div>}
      {error && <div className="mensaje-error">{error}</div>}
    </div>
  )
}

export default ReservationForm