import { useState } from 'react'

const nombres = [
  'María López',
  'Carlos Ramírez',
  'Ana Martínez',
  'José García',
  'Laura Hernández'
]

const comentarios = [
  'Un lugar increíble, las pozas de agua turquesa son impresionantes. Definitivamente hay que visitarlo.',
  'La mejor experiencia en naturaleza que he tenido en Guatemala. El sendero es exigente pero vale la pena.',
  'Recomiendo ir temprano para disfrutar sin tanta gente. Las cascadas son espectaculares.',
  'Semuc Champey es un paraíso escondido. El mirador tiene una vista que quita el aliento.',
  'Viajé con mi familia y todos quedamos maravillados. Un destino que todo guatemalteco debe conocer.'
]

function Testimonials() {
  const [indice, setIndice] = useState(0)

  function cambiarTestimonio() {
    let nuevo = indice
    while (nuevo === indice) {
      nuevo = Math.floor(Math.random() * nombres.length)
    }
    setIndice(nuevo)
  }

  return (
    <div className="testimonios">
      <h2>Opiniones de Visitantes</h2>
      <div className="testimonio-card">
        <p className="testimonio-texto">"{comentarios[indice]}"</p>
        <p className="testimonio-nombre">— {nombres[indice]}</p>
      </div>
      <button onClick={cambiarTestimonio}>Ver otra opinión</button>
    </div>
  )
}

export default Testimonials