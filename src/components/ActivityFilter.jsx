import { useState } from 'react'

const actividades = [
  'Rapel en las paredes del cañón',
  'Observación de aves al amanecer',
  'Visita al mercado de artesanías de Lanquín',
  'Recorrido por una finca de cardamomo',
  'Caminata nocturna guiada por el bosque',
  'Fotografía de paisaje desde el mirador',
  'Nado en las pozas bajas del río',
  'Visita a la cueva de los murciélagos en Lanquín'
]

function ActivityFilter() {
  const [busqueda, setBusqueda] = useState('')

  const filtradas = actividades.filter((actividad) =>
    actividad.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="filtro-actividades">
      <h2>Actividades Disponibles</h2>
      <input
        type="text"
        placeholder="Buscar actividad..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul className="lista-actividades">
        {filtradas.map((actividad) => (
          <li key={actividad}>{actividad}</li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityFilter