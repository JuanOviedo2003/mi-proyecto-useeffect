import React, { useEffect, useState } from 'react'

//Realizar una acción cuando la ventana del navegador cambia de tamaño o se desplaza.

function EventListenerCustom() {

    // estados para alto y ancho del viewport
    const [ viewportWidth, setViewportWidth ] = useState(10)
    const [ viewportHeight, setViewportHeight ] = useState(10)


    // efecto cada que cambia cuando se afecta el ancho o alto del viewport
    useEffect( () => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight)
            setViewportWidth(window.innerWidth)
        }

        // escuchar cambio de tamaño en la ventana y ejecuta handleResize
        window.addEventListener('resize', handleResize);

        //Clear del effect
        return () => {
            //remueve el evento "añadido"
            window.removeEventListener('resize', handleResize);
        };
    },[viewportHeight, viewportWidth])
    

    return (
        <div className="bg-green-400 border-green-300 sm:row-start-1 sm:row-end-7 
            sm:col-start-3 sm:col-end-7 h-full border-5 flex items-center justify-center">
            Event Listener Custom 
            <div className='flex flex-col gap-2 m-2 p-4 bg-green-600 text-white rounded-2xl'>
                <p>Height: {viewportHeight}px</p>
                <p>Width: {viewportWidth}px</p>
            </div>
        </div>
    )
}

export default EventListenerCustom