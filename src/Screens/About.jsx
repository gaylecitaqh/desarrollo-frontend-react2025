import { button } from 'motion/react-client';
import { useState } from 'react';
import { useSelector } from 'react-redux'

const About =() =>{
    // LOS HOOKKS EN REACT SON FUNCIONES YA DEFINIDAS
    // el mas conocido hook useState
    //siempre tienen el prefijo use
    // otros hooks: useEffect, useContext,useRef,useTransition
    //es posible crear nuestros propios hooks: useService, useImage
    
    //el hooke useState permite manejar variables de estado en componentes
    //reduxToolkit es para manejar estados globales

    //const count = useSelector((state) => state.product.initialValue)
    const[nameComponnet, setNameComponent]=useState('About');   // es lo mismo que: const nameComponnet= 'About';
    return(
        <>
        <p>Component About</p>
         {/*   Valor de InitialValue es <span>{ count }</span> */}
        <p>Component name: {nameComponnet}</p>
        <button onClick={()=> {setNameComponent('Curso de React')}}>Press</button>
        </>

    );
}

export default About;