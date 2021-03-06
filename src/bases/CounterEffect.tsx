import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


export const CounterEffect = () => {

  const [ counter, setCounter ] = useState( 5 );

  /* -----------------------------------------------------------------
     Hook para que ejecute los estilos de gsap cuando clicamos en 
      un componente en concreto y no los ejecute en ambos
  --------------------------------------------------------------------*/
  const counterElement = useRef<HTMLHeadingElement>(null);

  const MAXIMUN_COUNT = 10;

  const handleClick = () => setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) );

  useEffect(() => {

    if(counter < 10 ) return;
    
    console.log('¡Has llegado al valor máxmio!');

    gsap.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then( () => {
        gsap.to( counterElement.current, { y: 0 , duration: 1, ease: 'bounce.out' });
    });

  }, [counter]);
  
  return (
    <>
    <h1>CounterEffect:</h1>
    <h2 ref={ counterElement }>{ counter  }</h2>

    <button onClick={ handleClick }>
      +1
    </button>
    </>
  )
}
