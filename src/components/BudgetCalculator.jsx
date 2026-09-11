import { useState } from 'react'

function BudgetCalculator() {
  const [asistentes, setAsistentes] = useState(1)
  const [paquete, setPaquete] = useState(150)
  const [transporte, setTransporte] = useState(false)
  const [alimentacion, setAlimentacion] = useState(false)
  const [equipo, setEquipo] = useState(false)

  const total = (paquete + (transporte ? 40 : 0) + (alimentacion ? 60 : 0) + (equipo ? 25 : 0)) * asistentes

  return (
    <div className="cotizador">
      <h2>Cotizador de Excursión</h2>

      <label>Número de asistentes:</label>
      <input type="number" min="1" value={asistentes} onChange={(e) => setAsistentes(Number(e.target.value))} />

      <label>Paquete:</label>
      <select value={paquete} onChange={(e) => setPaquete(Number(e.target.value))}>
        <option value={150}>Básico — Q150</option>
        <option value={250}>Completo — Q250</option>
        <option value={350}>Premium — Q350</option>
      </select>

      <div className="checkbox-grupo">
        <label>
          <input type="checkbox" checked={transporte} onChange={(e) => setTransporte(e.target.checked)} />
          Transporte (+Q40/persona)
        </label>
        <label>
          <input type="checkbox" checked={alimentacion} onChange={(e) => setAlimentacion(e.target.checked)} />
          Alimentación (+Q60/persona)
        </label>
        <label>
          <input type="checkbox" checked={equipo} onChange={(e) => setEquipo(e.target.checked)} />
          Equipo para pozas (+Q25/persona)
        </label>
      </div>

      <div className="total-presupuesto">
        Total: Q{total}
      </div>
    </div>
  )
}

export default BudgetCalculator