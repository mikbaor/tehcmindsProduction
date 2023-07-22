import React from 'react'

const Starts = ({children }) => {
    const generarCoordenadaAleatoria = () => {
        return {
          x: Math.random() * 100, // Valor entre 0 y 100
          y: Math.random() * 100, // Valor entre 0 y 100
        };
      };
    
      const generarAnimacionAleatoria = ({index}) => {
        const duracionAleatoria = [3, 7, 11,17,23,27,31];
        const duracionIndex = Math.floor(Math.random() * duracionAleatoria.length);
        const duracion = duracionAleatoria[duracionIndex];
        const anim = index % 2 === 0 ? `destelloAnim-2` : `destelloAnim`;
        return `${anim} ${duracion}s infinite ease-in`;
      };
  return (
    <div className="w-100 h-100">
        {Array.from({ length: 400 }, (_, index) => {
            const coordenada = generarCoordenadaAleatoria();
            const animacion = generarAnimacionAleatoria({index:index});
            const estiloEstrella = {
            position: 'absolute',
            top: `${coordenada.y}%`,
            left: `${coordenada.x}%`,
            width: '2px',
            height: '2px',
            backgroundColor: '#fff',
            opacity: 0.7,
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: animacion,
            };

            return <div key={index} style={estiloEstrella} className="estrella"></div>;
        })}
        {children }
    </div>
  )
}

export default Starts
