import { useState } from 'react'

const fotos = [
  { titulo: 'Pozas de agua turquesa', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Semuc_Champey_natural_wonder.jpg?width=250' },
  { titulo: 'Vista general de las pozas', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Semuc_Champey,_Guatemala.jpg?width=250' },
  { titulo: 'Río Cahabón', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cahabón_River,_Semuc_Champey,_Guatemala.jpg?width=250' },
  { titulo: 'Rápidos del río Cahabón', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Semuc_Champey_-_Rio_Cahabon_-_Guatemala.jpg?width=250' },
  { titulo: 'Puente natural de piedra caliza', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Semuc_Champey_Guatemala.JPG?width=250' },
  { titulo: 'Vista aérea del monumento', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vista_aerea_de_Semuc_Champey_-_panoramio.jpg?width=250' },
]

function Gallery() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  return (
    <div className="galeria">
      <h2>Galería de Imágenes</h2>
      <div className="galeria-fila">
        {fotos.map((foto) => (
          <div className="galeria-item" key={foto.titulo} onClick={() => setImagenSeleccionada(foto)}>
            <img src={foto.url} alt={foto.titulo} />
            <p>{foto.titulo}</p>
          </div>
        ))}
      </div>

      {imagenSeleccionada && (
        <div className="modal" onClick={() => setImagenSeleccionada(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar-modal" onClick={() => setImagenSeleccionada(null)}>✕</span>
            <img src={imagenSeleccionada.url} alt={imagenSeleccionada.titulo} />
            <p>{imagenSeleccionada.titulo}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery