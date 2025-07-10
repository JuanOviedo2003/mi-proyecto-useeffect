import React from 'react'
import { useState, useEffect } from 'react'

//Cambiar el título del documento HTML (`<title>`) según el componente activo o un valor de estado.

function DinamicTitle() {

    const randomTitles = ["Cambie", "Mira", "Esto", "Si", "Puedes", "Epa", "Colombia", "Salsa", "Control"]

    const setTitleRandom = () => {
        return setTitle(randomTitles[Math.floor(Math.random() * randomTitles.length)])
    }

    const [title, setTitle] = useState("default title")

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div className="bg-blue-400 border-blue-300 sm:row-start-5 sm:row-end-7 
            sm:col-start-1 sm:col-end-3 h-full border-5 flex items-center justify-center">
            <button onClick={setTitleRandom} className="bg-blue-800 text-white p-2 rounded-md">Change Title</button>
        </div>
    )
}

export default DinamicTitle